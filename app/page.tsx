import { DontGetOverwhelmed } from "./components/DontGetOverwhelmed";
import { FadeIn } from "./components/FadeIn";
import { FinePrint } from "./components/FinePrint";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowWeWork } from "./components/HowWeWork";
import { NextSteps } from "./components/NextSteps";
import { OptionalRetainer } from "./components/OptionalRetainer";
import { Overview } from "./components/Overview";
import { Roadmap } from "./components/Roadmap";
import { WhoWeAre } from "./components/WhoWeAre";

export default function Home() {
  return (
    <main className="doc">
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn>
        <WhoWeAre />
      </FadeIn>
      <FadeIn>
        <Overview />
      </FadeIn>
      <FadeIn>
        <HowWeWork />
      </FadeIn>
      <FadeIn>
        <Roadmap />
      </FadeIn>
      <FadeIn>
        <DontGetOverwhelmed />
      </FadeIn>
      <FadeIn>
        <OptionalRetainer />
      </FadeIn>
      <FadeIn>
        <FinePrint />
      </FadeIn>
      <FadeIn>
        <NextSteps />
      </FadeIn>
      <FadeIn>
        <Footer />
      </FadeIn>
    </main>
  );
}
