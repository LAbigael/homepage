import Link from "next/link"

import Section from "./Section"

const Projects = () => (
  <Section>
    <h4 className="mt-6 text-lg underline-offset-4 decoration-rosePineDawn-text/50 decoration-4 underline mb-2 font-semibold">
      Projets
    </h4>

    <div className="flex flex-col">
      <div className="mt-2 flex flex-row">
        <span className="date">2019</span>
        <div className="flex flex-col">
          <span className="font-bold">Safir</span>
          <span>
            Dashboard de visualisation de données et statistique pour l&apos;application Safir, application de transport pour les employers du groupe Safran.
          </span>
          <span className="lg:leading-loose text-sm text-rosePineDawn-pine">
            React-Admin, Datastore
          </span>
          <span className="mt-2 font-bold">BusExchange</span>
          <span>
            Bourse de fret pour des transporteur de bus locaux. S&apos;assigner
            des trajets, communiquer, faire des devis.
          </span>
          <span className="lg:leading-loose text-sm text-rosePineDawn-pine">
            React, NodeJS, Datastore
          </span>
        </div>
      </div>
      <div className="mt-2 flex flex-row">
        <span className="date">2020</span>
        <div className="flex flex-col">
          <span className="font-bold">Goha</span>
          <span className="text-justify">
            Projet start-up réseau social autour de la nourriture et du bien
            manger. Inciter les gens à cuisiner en y prenant plaisir.
          </span>
          <span className="text-sm lg:leading-loose text-rosePineDawn-pine">
            React-Native, NodeJS, Postgresql
          </span>
        </div>
      </div>
      <div className="mt-2 flex flex-row">
        <span className="date">2021</span>
        <div className="flex flex-col">
          <span className="font-bold">Keystone</span>
          <span>
            Partager les variables d&apos;environements entre développeurs dans
            le terminal.
          </span>
          <span className="text-sm lg:leading-loose text-rosePineDawn-pine">
            Golang, Postgresql
          </span>
          <span className="mt-2 font-bold">Fregat</span>
          <span>
            Répertorier et visualiser les fraudes banquaire pour le groupe BPCE.
          </span>
          <span className="text-sm lg:leading-loose text-rosePineDawn-pine">
            React, NodeJS, Postgresql
          </span>
        </div>
      </div>
      <div className="mt-2 flex flex-row">
        <span className="date">2022</span>
        <div className="flex flex-col">
          <span className="font-bold">Nutrascan</span>
          <span>
            Site d&apos;évaluation <Link href="nutrascan.com" className="text-rosePineDawn-love">nutrascan.com</Link> de compléments alimentaire avec backoffice
            pour des rédacteur•rice•s trajets, communiquer, faire des devis.
          </span>
          <span className="text-sm lg:leading-loose text-rosePineDawn-pine">PHP, Wordpress</span>
        </div>
      </div>
    </div>
  </Section>
);

export default Projects;
