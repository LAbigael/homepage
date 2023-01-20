import Link from "next/link";
import Section from "./Section"

const Bio = () => {
  return (
    <Section>
      <h4 className="mt-6 text-lg underline-offset-4 decoration-rosePineDawn-text/50 decoration-4 underline mb-2 font-semibold">
        Bio
      </h4>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <span className="date">1999</span>
          <span>Né à Sarlat-la-Canéda, capitale du Périgord noir.</span>
        </div>
        <div className="flex flex-row">
          <span className="date">2017</span>
          <span>
            Entre dans l&apos;école d&apos;Ingénieur informatique CESI de Pau.
          </span>
        </div>
        <div className="flex flex-row">
          <span className="date">2019</span>
          <div className="flex flex-col">
            <span>
              Sort de l&apos;école d&apos;Ingénieur pour me concentrer sur ce
              qui me plait : le développement d&apos;applications.
            </span>
            <span>
              Rejoint l&apos;équipe de l&apos;agence web et startup{" "}
              <Link href="wearedevx.com" className="text-rosePineDawn-rose">
                DevX
              </Link>
              .
            </span>
          </div>
        </div>
        <div className="flex flex-row">
          <span className="date">2023</span> <span>Travail en freelance.</span>
        </div>
      </div>
    </Section>
  );
};

export default Bio;
