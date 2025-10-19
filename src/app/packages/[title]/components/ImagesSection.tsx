import { IPackage } from "@/app/utils/fetchPackages";
import Image from "next/image";

// Interface for Props
interface Props {
  pkg: IPackage;
}

// Images section
export default function ImagesSection({ pkg }: Props) {
  return (
    <>
      {pkg.images.length > 2 && (
        <section
          className="min-h-screen px-5 py-16 bg-white grid grid-cols-1 gap-5
            md:px-10 xl:px-24 md:py-24 lg:grid-cols-3"
        >
          <div className="col-span-1 lg:col-span-2">
            <Image src={pkg.images[2].url || "/"} alt={"pkg-image-3"} width={1000} height={1000} />
          </div>
          <div className="grid grid-rows-2 gap-5">
             <Image src={pkg.images[2].url || "/"} alt={"pkg-image-3"} width={1000} height={1000} />
             <Image src={pkg.images[2].url || "/"} alt={"pkg-image-4"} width={1000} height={1000} />
          </div>
        </section>
      )}
    </>
  );
}
