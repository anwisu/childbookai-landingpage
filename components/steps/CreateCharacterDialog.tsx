"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { useState } from "react";
import { DocumentUpload } from "iconsax-react";
import { AppButton } from "../shared/AppButton";
import type { CharacterFormData } from "./AddCharacterDialog";

export type CreateCharacterDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCharacterCreated?: (character: CharacterFormData) => void;
};

export default function CreateCharacterDialog({
  open,
  onOpenChange,
  onCharacterCreated,
}: CreateCharacterDialogProps) {
  const [formData, setFormData] = useState<CharacterFormData & { characterType: string; ethnicity: string; hairColor: string }>({
    name: "",
    description: "",
    age: "",
    gender: "",
    characterType: "Human",
    ethnicity: "",
    hairColor: "",
  });

  const handleCreateCharacter = () => {
    if (!formData.name.trim()) return;

    onCharacterCreated?.(formData);
    onOpenChange(false);

    setFormData({
      name: "",
      description: "",
      age: "",
      gender: "",
      characterType: "Human",
      ethnicity: "",
      hairColor: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[820px] max-h-[90vh] rounded-3xl p-0 bg-[#F4FAFA] overflow-hidden flex flex-col">
        <div className="overflow-y-auto flex-1 px-8 sm:px-10 pt-8 sm:pt-10">
          <DialogHeader className="items-center text-center pt-10">
            <DialogTitle className="text-5xl font-bold text-foreground">
              Create Character
            </DialogTitle>
            <DialogDescription className="text-md text-foreground text-center mx-auto max-w-md">
              Upload a source image or use &quot;Generate Image&quot; to make
              character based on the form input.
            </DialogDescription>
          </DialogHeader>

          {/* Upload Section */}
          <div className="mt-6 rounded-lg bg-gray-100 p-6 mx-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Section - Upload Area */}
              <div className="flex flex-col gap-4">
                {/* Upload Box */}
                <div className="relative border-2 border-dashed border-blue-800 rounded-lg p-8 flex flex-col h-full bg-transparent">
                  <div className="flex-1 flex items-center justify-center">
                    <DocumentUpload size="40" color="#30a0a6" variant="Bold" />
                  </div>
                  {/* Format Text */}
                  <p className="text-xs text-gray-500 text-center">
                    *Formats for download: .jpg, .jpeg, .png, .pdf
                  </p>
                </div>
              </div>

              {/* Right Section - Information */}
              <div className="flex flex-col gap-4 text-center">
                <h3 className="text-2xl font-bold text-foreground">
                  Upload image
                </h3>
                <p className="text-sm text-foreground">
                  Custom image uploads are only supported for human characters.
                </p>

                <div className="flex flex-col gap-2 text-xs text-gray-500">
                  <p>
                    *Adding character image means you accept our{" "}
                    <a
                      href="#"
                      className="text-blue-800 hover:underline font-semibold"
                    >
                      privacy policy
                    </a>
                    . Make sure you upload recognizable face. If you want very
                    cartoony character, create a non-human character instead.
                  </p>
                </div>

                <div className="mt-auto text-center">
                  <AppButton
                    variant="primary"
                    size="sm"
                    shadow
                    className="text-foreground font-semibold"
                  >
                    See guide
                  </AppButton>
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields Below */}
          <div className="mt-6 space-y-6 mx-12">
            {/* First Row: Character name, Character type, Age */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Character name</Label>
                <Input
                  id="name"
                  placeholder="Enter character name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="characterType">Character type</Label>
                <Select
                  value={formData.characterType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, characterType: value })
                  }
                >
                  <SelectTrigger id="characterType" className="w-full">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Human">Human</SelectItem>
                    <SelectItem value="Animal">Animal</SelectItem>
                    <SelectItem value="Fantasy">Fantasy</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="e.g., 5"
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Second Row: Gender Radio Buttons */}
            <div className="space-y-2">
              <Label>Gender</Label>
              <div className="flex gap-4 w-full">
                {["Male", "Female", "Non-Binary"].map((genderOption) => (
                  <label
                    key={genderOption}
                    className={`flex items-center justify-start gap-2 px-4 py-2 rounded-md border-2 cursor-pointer transition-all flex-1 ${
                      formData.gender === genderOption
                        ? "bg-blue-800 text-white border-blue-800"
                        : "bg-white text-foreground border-blue-800 hover:bg-blue-800/10"
                    }`}
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={genderOption}
                      checked={formData.gender === genderOption}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        formData.gender === genderOption
                          ? "border-white"
                          : "border-blue-800"
                      }`}
                    >
                      {formData.gender === genderOption && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <span className="text-sm font-medium">{genderOption}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Third Row: Choose ethnicity and Hair color */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Choose ethnicity */}
              <div className="space-y-2">
                <Label htmlFor="ethnicity">Choose ethnicity</Label>
                <Select
                  value={formData.ethnicity}
                  onValueChange={(value) =>
                    setFormData({ ...formData, ethnicity: value })
                  }
                >
                  <SelectTrigger id="ethnicity" className="w-full">
                    <SelectValue placeholder="Select ethnicity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Latino">Latino</SelectItem>
                    <SelectItem value="Asian">Asian</SelectItem>
                    <SelectItem value="African">African</SelectItem>
                    <SelectItem value="Caucasian">Caucasian</SelectItem>
                    <SelectItem value="Middle Eastern">
                      Middle Eastern
                    </SelectItem>
                    <SelectItem value="Mixed">Mixed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Hair color */}
              <div className="space-y-2">
                <Label>Hair color</Label>
                <div className="flex items-center -space-x-2">
                  {/* Initial 7 color swatches in avatar group style */}
                  {[
                    "#FFFCEC", // Light cream
                    "#B5B3B1", // Medium gray
                    "#EBC299", // Light peach
                    "#E67D14", // Orange (selected in image)
                    "#96591D", // Medium brown
                    "#4A2F15", // Dark brown
                    "#2B1A09", // Very dark brown/black
                  ].map((color, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, hairColor: color })
                      }
                      className={`relative w-10 h-10 rounded-full border-2 transition-all hover:z-10 ${
                        formData.hairColor === color
                          ? "border-blue-800 ring-2 ring-blue-800 ring-offset-1 z-10"
                          : "border-white hover:border-blue-800"
                      }`}
                      style={{ backgroundColor: color }}
                      aria-label={`Select hair color ${color}`}
                    />
                  ))}

                  {/* More options button with popover */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="relative w-10 h-10 rounded-full border-2 border-blue-800 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors hover:z-10 ml-2"
                        aria-label="More hair color options"
                      >
                        <div className="flex gap-0.5">
                          <div className="w-1 h-1 rounded-full bg-blue-800" />
                          <div className="w-1 h-1 rounded-full bg-blue-800" />
                          <div className="w-1 h-1 rounded-full bg-blue-800" />
                        </div>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-4 bg-[#F4FAFA]">
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          "#FFFCEC", // Light cream
                          "#B5B3B1", // Medium gray
                          "#EBC299", // Light peach
                          "#E67D14", // Orange (selected in image)
                          "#96591D", // Medium brown
                          "#4A2F15", // Dark brown
                          "#2B1A09", // Very dark brown/black
                          "#E36965", // Muted reddish-pink/coral
                          "#FCE55F", // Bright yellow
                          "#62E551", // Vibrant lime green
                          "#0380A6", // Deep teal
                          "#E365C0", // Bright magenta/fuchsia
                        ].map((color, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, hairColor: color });
                            }}
                            className={`w-10 h-10 rounded-full border-2 transition-all ${
                              formData.hairColor === color
                                ? "border-blue-800 ring-2 ring-blue-800 ring-offset-1"
                                : "border-gray-300 hover:border-blue-800"
                            }`}
                            style={{ backgroundColor: color }}
                            aria-label={`Select hair color ${color}`}
                          />
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex flex-row justify-end gap-4 px-8 sm:px-10 pb-2 border-t border-slate-200 sm:py-4 mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleCreateCharacter}
            className="bg-blue-800 text-white hover:bg-teal-700"
          >
            Create Character
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
