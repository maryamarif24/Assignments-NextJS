import React from "react";
import Image from "next/image";


export default function Images() {
    return (
        <div>
            <div className="md:hidden">
                <Image
                    src="/Images/Girl.svg"
                    width={428}
                    height={390}
                    alt="Image"
                />
            </div>
        </div>
    )
}