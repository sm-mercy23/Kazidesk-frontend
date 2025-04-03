import React from "react";
import {Hero} from "../components/home/Hero";
import {FeatureSection} from "../components/home/FeatureSection";
import {TestimonialSection} from "../components/home/TestimonialSection";
import {CallToAction} from "../components/home/CallToAction";

import AppFooter from "@/components/shared/AppFooter";

const Index = () => {
    return (
        <main className="bg-white w-full  ">
            {/* Hero Section */}
            <Hero/>
            {/* Feature Section 1 */}

            <FeatureSection
                title={
                    <>
                        Enhance{" "}
                        <span style={{color: "rgba(79,25,25,1)"}}>Collaboration</span> and{" "}
                        <span style={{color: "rgba(79,25,25,1)"}}>Efficiency</span>
                    </>
                }
                description={
                    <>
                        Boost your team's productivity with KaziDesk's advanced suite of
                        business tools. Manage projects, schedule Zoom meetings, track
                        assets, and streamline recruitment processes seamlessly. KaziDesk is
                        designed to enhance collaboration and drive efficiency across all
                        levels of your organization. Elevate your team's performance today
                    </>
                }
                buttonText1="Explore Features"
                buttonText2="Explore Products"
            />

            {/* Feature Section 2 */}
            <FeatureSection
                variant="alternate"
                title={
                    <><span style={{
                        fontFamily:
                            "Gochi Hand, -apple-system, Roboto, Helvetica, sans-serif",
                        fontWeight: 400,
                    }}>
                        Expert{" "}
                    </span>
                        <span style={{
                            fontFamily: "Gochi Hand, -apple-system, Roboto, Helvetica, sans-serif",
                            fontWeight: 400,
                            color: "rgba(79,25,25,1)",
                        }}>Guidance</span>
                        <span style={{
                            fontFamily: "Gochi Hand, -apple-system, Roboto, Helvetica, sans-serif",
                            fontWeight: 400,
                        }}>, Powerful{" "}</span>
                        <span
                            style={{
                                fontFamily:
                                    "Gochi Hand, -apple-system, Roboto, Helvetica, sans-serif",
                                fontWeight: 400,
                                color: "rgba(79,25,25,1)",
                            }}
                        >Solutions</span>
                    </>
                }
                description={
                    <>
                        Imagine a vast collection of business apps at your disposal.
                        <br/>
                        Got something to improve? There is an app for that.
                        <br/>
                        No complexity, no cost, just a one-click install.
                        <br/>
                        Each app simplifies a process and empowers more people.
                        <br/>
                        Imagine the impact when everyone gets the right tool for the
                        <br/>
                        job, with perfect integration.
                    </>
                }
                buttonText1="Explore Our Services"
                buttonText2="Explore Products"
            />

            {/* Testimonial Section */}
            <TestimonialSection/>

            {/* Call to Action Section */}
            <CallToAction/>

            {/* Footer */}
            <AppFooter/>
        </main>
    );
};

export default Index;
