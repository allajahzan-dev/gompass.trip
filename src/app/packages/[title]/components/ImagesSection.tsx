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
                        {pkg.images[2].url && (
                            <Image
                                src={pkg.images[2].url}
                                alt={"pkg-image-3"}
                                width={1000}
                                height={1000}
                                className="h-full w-full object-cover object-center"
                            />
                        )}
                    </div>
                    <div className="grid grid-rows-2 gap-5">
                        {pkg.images[3].url && (
                            <Image
                                src={pkg.images[3].url}
                                alt={"pkg-image-3"}
                                width={1000}
                                height={1000}
                                className="h-full w-full object-cover object-center"
                            />
                        )}
                        {pkg.images[4].url && (
                            <Image
                                src={pkg.images[4].url}
                                alt={"pkg-image-4"}
                                width={1000}
                                height={1000}
                                className="h-full w-full object-cover object-center"
                            />
                        )}
                    </div>
                </section>
            )}
        </>
    );
}
