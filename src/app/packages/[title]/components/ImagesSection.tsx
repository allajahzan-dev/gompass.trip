import { IPackage } from "@/app/utils/fetchPackages";
import { SERVER_URL } from "@/constants/url";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
    pkg: IPackage;
}

export default function ImagesSection({ pkg }: Props) {
    const images = pkg.images || [];

    if (images.length < 3) return null;

    return (
        <section
            className="min-h-[80vh] px-5 pb-16 bg-white grid grid-cols-1 gap-5
            md:px-10 xl:px-24 md:pb-24 lg:grid-cols-3"
        >
            <div
                className={cn(
                    images.length > 3 ? "col-span-1 lg:col-span-2" : "col-span-3"
                )}
            >
                {images[2]?.url && (
                    <Image
                        src={SERVER_URL + images[2].url}
                        alt="pkg-image-3"
                        width={1000}
                        height={1000}
                        className="h-full w-full object-cover object-center rounded-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] border cursor-pointer"
                    />
                )}
            </div>

            {images.length >= 4 && (
                <div className="grid grid-rows-2 gap-5">
                    {images[3]?.url && (
                        <Image
                            src={SERVER_URL + images[3].url}
                            alt="pkg-image-4"
                            width={1000}
                            height={1000}
                            className="h-full w-full object-cover object-center rounded-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] border cursor-pointer"
                        />
                    )}
                    {images[4]?.url && (
                        <Image
                            src={SERVER_URL + images[4].url}
                            alt="pkg-image-5"
                            width={1000}
                            height={1000}
                            className="h-full w-full object-cover object-center rounded-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] border cursor-pointer"
                        />
                    )}
                </div>
            )}
        </section>
    );
}
