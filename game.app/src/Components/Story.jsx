import { useRef } from "react";
import gsap from "gsap";

const Story = () => {
    const frameRef = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const xPos = clientX - rect.left;
        const yPos = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((yPos - centerY) / centerY) * -10;
        const rotateY = ((xPos - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 500,
            ease: "power1.inOut"
        });
    };

    const handleMouseLeave = () => {
        const element = frameRef.current;

        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: "power1.inOut"
        });
    };

    return (
        <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
            <div className="flex size-full flex-col items-center py-10 pb-24">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    the multiversal ip world
                </p>

                <div className="relative size-full">
                    <div className="animated-title relative z-10 mix-blend-difference">
                        <div className="mt-5 pointer-events-none text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
                            the st<b>o</b>ry of <br /> a hidden real<b>m</b>
                        </div>
                    </div>

                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img
                                    ref={frameRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    src="img/entrance.webp"
                                    alt="entrance"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <p className="mt-3 max-w-sm text-center font-circular text-violet-50 md:text-start">
                            Where realms converge, lies Zentry and the boundless pillar.
                            Discover its secrets and shape your fate amidst infinite opportunities.
                        </p>

                        <button className="mt-5 bg-violet-50 px-10 py-4 text-black font-general text-xs uppercase rounded-full hover:bg-white transition-colors">
                            discover prologue
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
