import Image from "next/image";

export default function Home() {
  return (
    <>
      <p className="font-generalsans font-light">
        This is General Sans Light (300).
      </p>

      <p className="font-generalsans font-medium">
        This is General Sans Medium (500).
      </p>

      <p className="font-generalsans font-semibold">
        This is General Sans SemiBold (600).
      </p>

      <p className="font-generalsans font-bold">
        This is General Sans Bold (700).
      </p>

      <p className="font-generalsans font-light italic">
        This is General Sans Light (300 Italic).
      </p>

      <p className="font-generalsans font-medium italic">
        This is General Sans Medium (500 Italic).
      </p>

      <p className="font-generalsans font-semibold italic">
        This is General Sans SemiBold (600 Italic).
      </p>

      <p className="font-generalsans font-bold italic">
        This is General Sans Bold (700 Italic).
      </p>
    </>
  );
}
