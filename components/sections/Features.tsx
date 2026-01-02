"use client";

import Image from "next/image";

export function Features() {
  return (
    <section
      className="relative w-full overflow-hidden py-32"
      style={{ aspectRatio: "1440/1061" }}
    >
      <svg
        className="absolute inset-0 z-0 w-full h-full"
        viewBox="0 0 1440 1061"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <path
          d="M600.5 42.0822C597.627 0.379421 529.984 10.3904 523 42.0822C505.763 23.3879 482.394 34.6982 480 46.0825C464 23.5825 425.536 44.0678 421.945 62.6423C360.18 20.9395 317.207 51.2579 303.441 71.6299C287.641 64.4398 277.706 74.6258 274.713 80.6175C271.84 56.171 251.97 58.448 242.394 62.6423C235.212 29.5677 216.872 36.5908 205.5 42.5825C199.198 32.3907 181.347 39.5825 181.347 50.0595C154.055 39.9933 124 62.6423 127 80.6175C116.945 73.4274 108.5 80.6175 108.5 91.5825C101.318 85.8304 84 94.5825 79.5 111.583C76 97.0825 65.5 87.0825 48 94.5825C48 58.0825 12.5 35.0825 0 39.2743V980.747C0 1025.8 37.1859 1061.97 82.2214 1060.72L1362.22 1025.16C1405.52 1023.96 1440 988.509 1440 945.191V59.0472C1382.54 7.27818 1306.5 32.0825 1287.38 66.2373C1224 46.0825 1208 100.583 1224 132.583C1208.2 132.583 1198.2 147.126 1201.2 156.114C1190 139.583 1172.84 142.583 1170.5 152.583C1179.33 114.834 1148 110.083 1136.56 118.366C1131 98.5825 1106.5 99.5825 1099.5 115.583C1066 84.0825 1009 106.083 1001 132.583C1003.87 95.1938 982.5 82.5825 966 89.0825C962.5 59.5825 930.5 56.0825 918 73.5825C918 51.5822 903 46.5825 894.5 51.5822C888 -9.41752 824.5 -5.41748 797.5 10.5824C786.5 -5.91752 764.5 -0.917629 760.5 10.5823C724.59 1.95403 713.803 21.299 715 39.2743C704.945 36.3983 680.288 47.388 675.5 51.5822C658.263 40.078 637.084 50.2888 630.5 55.0822C623.318 37.8259 609 34.5822 600.5 42.0822Z"
          fill="white"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="text-center">
          <h1 className="text-heading-xl max-w-5xl mx-auto mt-8">
            <span className="text-foreground ml-2">Create</span>
            <span className="text-primary ml-2">Your Own Ai</span>
          </h1>
          <h1 className="text-heading-xl max-w-5xl mx-auto mb-8">
            <span className="text-foreground ml-2">
              Generated Children&apos;s Book!
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16">
          <div className="space-y-8">
            <div className="text-left">
              <Image
                src="/illustrations/book-face.svg"
                alt="Book Face"
                width={85}
                height={85}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Personalized Storybook
              </h3>
              <p className="text-body-sm">
                They are not just stories but they are the stories that you want
                to hear. The characters are the ones that you want to see. And
                adventures they have are the one you want to experience. Our
                custom storybook creator brings your child&apos;s imagination to
                life. Based on your title and description, we create a story
                specially for you.
              </p>
            </div>
            <div className="text-left">
              <Image
                src="/illustrations/letter.svg"
                alt="Letter"
                width={85}
                height={85}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Accessible Digital Books
              </h3>
              <p className="text-body-sm">
                Our children&apos;s book maker includes a text-to-speech feature
                that makes the book accessible to all. With a simple click of a
                button, the narration will read the book aloud in a clear voice.
                This feature is especially helpful for children who are
                struggling to read, or who need a little extra help with
                pronunciation.
              </p>
            </div>
            <div className="text-left">
              <Image
                src="/illustrations/hand-book.svg"
                alt="Hand Book"
                width={85}
                height={85}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Ownership Of Your Own AI Children Book
              </h3>
              <p className="text-body-sm">
                You own your story. You can print it, share it, or even sell it.
                Feel free to do whatever you want with your story.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/images/book-illustration.svg"
              alt="Book Illustration"
              width={1240}
              height={883}
              className="w-full max-w-[1240px] h-auto object-contain"
            />
          </div>

          <div className="space-y-8">
            <div className="text-left">
              <Image
                src="/illustrations/AI.svg"
                alt="AI"
                width={85}
                height={85}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Create Personalized Children&apos;s Books With AI Story
                Generator
              </h3>
              <p className="text-body-sm">
                Our AI-powered children&apos;s book creator enables you to craft
                one-of-a-kind stories that are never copied or duplicated. Using
                cutting-edge artificial intelligence, we help you unleash your
                imagination and bring your characters to life. With our
                intuitive interface you can easily customize your story and
                create a book that&apos;s truly unique. Whether you&apos;re a
                parent, teacher, or aspiring author, our AI story generator
                makes it easy to create a high-quality children&apos;s book in
                minutes.
              </p>
            </div>
            <div className="text-left">
              <Image
                src="/illustrations/pencil.svg"
                alt="Pencil"
                width={85}
                height={85}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Illustrated Children&apos;s Stories
              </h3>
              <p className="text-body-sm">
                Our children&apos;s book creator includes ai generated illustrations
                that bring the story to life. We make sure that the stories are
                not just words, but also visually appealing, making for a truly
                immersive reading experience. Our cutting edge AI Children&apos;s
                Book Illustrator will create illustrations that are unique to
                your story and with characters that you want to see.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
