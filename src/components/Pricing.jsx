import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Join the whitelist of ShortCall"
          title="Get early access for a discount"
        />
        <div className="subscribe">
          <form action="https://submit-form.com/cWVnSwfqr">
            <div className="form">
              <input type="email" name="email" className="form__email" placeholder="Enter your email address" />
              <button type="submit" className="form__button">Join Waitlist</button>
            </div>
          </form>
        </div>

        {/* <form action="https://submit-form.com/cWVnSwfqr">
          <input type="email" name="email" placeholder="Email Adress" className="contact-form-input w-input" />
          <button type="submit" className="button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1">Subscribe</button>
        </form> */}

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

      </div>
    </Section>
  );
};

export default Pricing;
