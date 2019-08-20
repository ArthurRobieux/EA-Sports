import React from "react";
// import styles from "./styles.module.scss";
import "./styles.css";

export const EaFooter = () => {
  return (
    <>
      <ea-local-footer theme="light" hide-studio-links="">
        <ea-local-links
          slot="local-links"
          title-text="FIFA 20"
          text-color="light"
        >
          <ea-local-link
            slot="local-link"
            link-url="/fr-fr/games/fifa/fifa-20"
            link-title="À propos de FIFA 20"
            link-text="À propos de FIFA 20"
            text-color="light"
          >
            <a href="/fr-fr/games/fifa/fifa-20" title="À propos de FIFA 20">
              À propos de FIFA 20
            </a>
          </ea-local-link>

          <ea-local-link
            slot="local-link"
            link-url="/fr-fr/games/fifa/fifa-20/news"
            link-title="Actus"
            link-text="Actus"
            text-color="light"
          >
            <a href="/fr-fr/games/fifa/fifa-20/news" title="Actus">
              Actus
            </a>
          </ea-local-link>

          <ea-local-link
            slot="local-link"
            link-url="/fr-fr/games/fifa/fifa-19/compete"
            link-title="Compétitions FIFA"
            link-text="Compétitions FIFA"
            text-color="light"
          >
            <a
              href="/fr-fr/games/fifa/fifa-19/compete"
              title="Compétitions FIFA"
            >
              Compétitions FIFA
            </a>
          </ea-local-link>

          <ea-local-link
            slot="local-link"
            link-url="/fr-fr/games/fifa/fifa-mobile"
            link-title="FIFA Mobile"
            link-text="FIFA Mobile"
            text-color="light"
          >
            <a href="/fr-fr/games/fifa/fifa-mobile" title="FIFA Mobile">
              FIFA Mobile
            </a>
          </ea-local-link>

          <ea-local-link
            slot="local-link"
            link-url="/fr-fr/games/fifa/fifa-20/buy"
            link-title="Obtenir FIFA maintenant"
            link-text="Obtenir FIFA maintenant"
            text-color="light"
          >
            <a
              href="/fr-fr/games/fifa/fifa-20/buy"
              title="Obtenir FIFA maintenant"
            >
              Obtenir FIFA maintenant
            </a>
          </ea-local-link>
        </ea-local-links>

        <ea-social-links
          slot="social-links"
          text-color="light"
          title-text="Suivre FIFA"
        >
          <ea-social-link
            slot="social-link"
            link-url="https://www.facebook.com/easportsfifa"
            link-title="Facebook"
            link-target="_blank"
            theme="brand"
            social-network="facebook"
          >
            <a href="https://www.facebook.com/easportsfifa" title="Facebook">
              facebook
            </a>
          </ea-social-link>

          <ea-social-link
            slot="social-link"
            link-url="https://twitter.com/easportsfifa"
            link-title="Twitter"
            link-target="_blank"
            theme="brand"
            social-network="twitter"
          >
            <a href="https://twitter.com/easportsfifa" title="Twitter">
              twitter
            </a>
          </ea-social-link>

          <ea-social-link
            slot="social-link"
            link-url="https://www.instagram.com/easportsfifa"
            link-title="Instagram"
            link-target="_blank"
            theme="brand"
            social-network="instagram"
          >
            <a href="https://www.instagram.com/easportsfifa" title="Instagram">
              instagram
            </a>
          </ea-social-link>
        </ea-social-links>

        <ea-rating-link
          slot="rating-link"
          link-url="http://www.fifa.com/"
          link-title="Site officiel FIFA"
          image-smallest="https://media.contentapi.ea.com/content/dam/ea/easports/fifa/Navigation/Footer/2018/fifa-logo.png"
          image-small="https://media.contentapi.ea.com/content/dam/ea/easports/fifa/Navigation/Footer/2018/fifa-logo.png"
          image-medium="https://media.contentapi.ea.com/content/dam/ea/easports/fifa/Navigation/Footer/2018/fifa-logo.png"
          image-large="https://media.contentapi.ea.com/content/dam/ea/easports/fifa/Navigation/Footer/2018/fifa-logo.png"
          image-largest="https://media.contentapi.ea.com/content/dam/ea/easports/fifa/Navigation/Footer/2018/fifa-logo.png"
          image-alt=""
        >
          <a href="http://www.fifa.com/" title="Site officiel FIFA" />
        </ea-rating-link>

        <ea-rating-link
          slot="rating-link"
          link-url="http://www.esrb.org"
          link-title="Classification PEGI"
          image-smallest="https://media.contentapi.ea.com/content/dam/gin/common/rating-icons/esrb/rating-pending.png"
          image-small="https://media.contentapi.ea.com/content/dam/gin/common/rating-icons/esrb/rating-pending.png"
          image-medium="https://media.contentapi.ea.com/content/dam/gin/common/rating-icons/esrb/rating-pending.png"
          image-large="https://media.contentapi.ea.com/content/dam/gin/common/rating-icons/esrb/rating-pending.png"
          image-largest="https://media.contentapi.ea.com/content/dam/gin/common/rating-icons/esrb/rating-pending.png"
          image-alt=""
        >
          <a href="http://www.esrb.org" title="Classification PEGI" />
        </ea-rating-link>
      </ea-local-footer>

      <ea-network-footer
        theme="dark"
        logo-image="https://media.contentapi.ea.com/content/dam/eacom/fr-fr/common/october-ea-ring.png"
        logo-tooltip=""
        logo-link-url="https://www.ea.com"
        logo-link-text="EA"
        logo-link-tooltip="EA"
      >
        <img
          src="https://media.contentapi.ea.com/content/dam/eacom/fr-fr/common/october-ea-ring.png"
          alt=""
        />

        <ea-link
          slot="link"
          link-href="/fr-fr/games"
          link-title="Parcourir les jeux"
          link-text="Parcourir les jeux"
          text-color="dark"
        >
          <a href="/fr-fr/games" title="Parcourir les jeux">
            Parcourir les jeux
          </a>
        </ea-link>

        <ea-link
          slot="link"
          link-href="/fr-fr/news"
          link-title="Dernières actus"
          link-text="Dernières actus"
          text-color="dark"
        >
          <a href="/fr-fr/news" title="Dernières actus">
            Dernières actus
          </a>
        </ea-link>

        <ea-link
          slot="link"
          link-href="https://help.ea.com"
          link-title="Assistance"
          link-text="Assistance"
          text-color="dark"
        >
          <a href="https://help.ea.com" title="Assistance">
            Assistance
          </a>
        </ea-link>

        <ea-link
          slot="link"
          link-href="/fr-fr/forums"
          link-title="Forums EA"
          link-text="Forums EA"
          text-color="dark"
        >
          <a href="/fr-fr/forums" title="Forums EA">
            Forums EA
          </a>
        </ea-link>

        <ea-link
          slot="link"
          link-href="http://www.ea.com/about"
          link-title="À propos"
          link-text="À propos"
          text-color="dark"
        >
          <a href="http://www.ea.com/about" title="À propos">
            À propos
          </a>
        </ea-link>

        <ea-link
          slot="link"
          link-href="/careers"
          link-title="Recrutement"
          link-text="Recrutement"
          text-color="dark"
        >
          <a href="/careers" title="Recrutement">
            Recrutement
          </a>
        </ea-link>

        <ea-locale-selector slot="locale-selector" theme="dark" value="fr-fr">
          <ea-locale-selector-option
            slot="locale-selector-option"
            value="en-us"
          >
            United States
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="en-gb"
          >
            United Kingdom
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="en-au"
          >
            Australia
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="fr-fr"
          >
            France
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="de-de"
          >
            Deutschland
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="it-it"
          >
            Italia
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="ja-jp"
          >
            日本
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="pl-pl"
          >
            Polska
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="pt-br"
          >
            Brasil
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="ru-ru"
          >
            Россия
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="es-es"
          >
            España
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="cs-cz"
          >
            Ceska Republika
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="da-dk"
          >
            Danmark
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="es-mx"
          >
            Mexico
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="nl-nl"
          >
            Nederland
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="nb-no"
          >
            Norge
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="sv-se"
          >
            Sverige
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="zh-hk"
          >
            繁體中文(香港)
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="tr-tr"
          >
            Türkçe
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="ar-sa"
          >
            الشرق الأوسط
          </ea-locale-selector-option>

          <ea-locale-selector-option
            slot="locale-selector-option"
            value="ko-kr"
          >
            대한민국
          </ea-locale-selector-option>
        </ea-locale-selector>

        <ea-network-legal
          slot="network-legal"
          copyright-text="©2019 Electronic Arts Inc."
          text-color="dark"
        >
          <ea-link
            slot="link"
            link-href="http://www.ea.com/legal"
            link-title="Mentions légales"
            link-text="Mentions légales"
            text-color="dark"
          >
            <a href="http://www.ea.com/legal" title="Mentions légales">
              Mentions légales
            </a>
          </ea-link>

          <ea-link
            slot="link"
            link-href="http://www.ea.com/service-updates"
            link-title="Mises à jour des services en ligne"
            link-text="Mises à jour des services en ligne"
            text-color="dark"
          >
            <a
              href="http://www.ea.com/service-updates"
              title="Mises à jour des services en ligne"
            >
              Mises à jour des services en ligne
            </a>
          </ea-link>

          <ea-link
            slot="link"
            link-href="https://www.ea.com/terms-of-service"
            link-title="NOUVEAU Contrat Utilisateur"
            link-text="Contrat Utilisateur"
            text-color="dark"
          >
            <a
              href="https://www.ea.com/terms-of-service"
              title="NOUVEAU Contrat Utilisateur"
            >
              Contrat Utilisateur
            </a>
          </ea-link>

          <ea-link
            slot="link"
            link-href="http://tos.ea.com/legalapp/WEBPRIVACY/US/en/PC/"
            link-title="Politique relative à la protection des données personnelles et aux cookies (Votre droit à la confidentialité)"
            link-text="Politique relative à la protection des données personnelles et aux cookies (Votre droit à la confidentialité)"
            text-color="dark"
          >
            <a
              href="http://tos.ea.com/legalapp/WEBPRIVACY/US/en/PC/"
              title="Politique relative à la protection des données personnelles et aux cookies (Votre droit à la confidentialité)"
            >
              Politique relative à la protection des données personnelles et aux
              cookies (Votre droit à la confidentialité)
            </a>
          </ea-link>
        </ea-network-legal>

        <ea-truste
          slot="truste"
          logo-image=""
          logo-tooltip=""
          domain="ea.com"
          link-url="https://privacy.truste.com/privacy-seal/validation?rid=f1a11c5d-0232-4077-8498-2e69a38c1335"
          link-text="TRUSTE"
          link-tooltip="TRUSTE"
        />
      </ea-network-footer>
    </>
  );
};
