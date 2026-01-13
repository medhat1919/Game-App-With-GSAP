import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const navContainerRef = useRef(null);
    const audioElementRef = useRef(null);

    // Basic scroll handler since we might not have react-use
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY === 0) {
                setIsNavVisible(true);
                navContainerRef.current.classList.remove("floating-nav");
            } else if (currentScrollY > lastScrollY) {
                setIsNavVisible(false); // Hide on scroll down
                navContainerRef.current.classList.add("floating-nav");
            } else if (currentScrollY < lastScrollY) {
                setIsNavVisible(true); // Show on scroll up
                navContainerRef.current.classList.add("floating-nav");
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        });
    }, [isNavVisible]);

    const toggleAudio = () => {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    };

    useEffect(() => {
        if (isAudioPlaying) {
            audioElementRef.current.play();
        } else {
            audioElementRef.current.pause();
        }
    }, [isAudioPlaying]);

    return (
        <div
            ref={navContainerRef}
            className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
        >
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4">
                    {/* Logo and Product button */}
                    <div className="flex items-center gap-7">
                        <img src="img/logo.png" alt="logo" className="w-10" />

                        <button
                            id="product-button"
                            className="group relative z-10 hidden w-fit cursor-pointer overflow-hidden rounded-full bg-blue-50 px-7 py-3 text-black sm:block"
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold uppercase">Products</span>
                            </div>
                        </button>
                    </div>

                    {/* Navigation Links and Audio Button */}
                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={`#${item.toLowerCase()}`}
                                    className="nav-hover-btn px-4 text-xs font-bold uppercase text-blue-50 hover:text-white transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        <button
                            className="ml-10 flex items-center space-x-0.5"
                            onClick={toggleAudio}
                        >
                            <audio
                                ref={audioElementRef}
                                className="hidden"
                                src="audio/loop.mp3"
                                loop
                            />
                            {[1, 2, 3, 4].map((bar) => (
                                <div
                                    key={bar}
                                    className={`indicator-line ${isIndicatorActive ? "active" : ""
                                        }`}
                                    style={{
                                        animationDelay: `${bar * 0.1}s`,
                                        height: isIndicatorActive ? '15px' : '5px',
                                        width: '3px',
                                        backgroundColor: '#EDFF66',
                                        borderRadius: '999px',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
