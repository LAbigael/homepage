import Link from "next/link";

const Bio = () => {
  return (
    <>
      <h4 className="text-lg underline font-semibold">Bio</h4>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <span className="mr-6">1999</span>{" "}
          <span>Né à Sarlat-la-Canéda, capitale du Périgord noir.</span>
        </div>
        <div className="flex flex-row">
          <span className="mr-6">2017</span>{" "}
          <span>
            Entre dans l&apos;école d&apos;Ingénieur informatique CESI de Pau.
          </span>
        </div>
        <div className="flex flex-row">
          <span className="mr-6">2019</span>{" "}
          <div className="flex flex-col">
            <span>
              Sort de l&apos;école d&apos;Ingénieur pour me concentrer sur ce
              qui me plait : le développement d&apos;applications.
            </span>
            <span>
              Rejoins l&apos;équipe de l&apos;agence web et startup{" "}
              <Link href="wearedevx.com" className="text-rosePineDawn-rose">DevX</Link>.
            </span>
          </div>
        </div>
        <div className="flex flex-row">
          <span className="mr-6">2023</span>{" "}
          <span>
            Travail en freelance.
          </span>
        </div>
      </div>
    </>
  );
};

export default Bio;
