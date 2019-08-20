import React from "react";
// import styles from "./styles.module.scss";
import "./styles.css";

export const EaHeader = () => {
  return (<>
    <div>
      <div id="content">
        <header class="eapl-network-nav__header">
          <menu class="eapl-network-nav__menu" role="navigation">
            <li
              class="eapl-network-nav__menu-item"
              role="link"
              link-ref="profile"
              title="Profile"
            >
              <ea-player-avatar
                api-host="//api.play4free.com"
                icon-color="light"
              />
            </li>

            <li
              class="eapl-network-nav__menu-item"
              role="link"
              link-ref="help"
              title="Aide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 17">
                <path d="M5.193,0C0.538,0,0,2.673,0,4.684a0.978,0.978,0,0,0,1.955,0c0-1.648.225-2.729,3.238-2.729,2.852,0,2.852,1.45,2.852,2.729a1.951,1.951,0,0,1-1.29,1.675l-0.216.083C4.8,7.108,3.809,7.531,3.809,8.472v3.5a0.978,0.978,0,1,0,1.955,0V8.887c0.4-.209,1.152-0.5,1.474-0.62l0.224-.085A3.831,3.831,0,0,0,10,4.684C10,3.526,10,0,5.193,0Z" />
                <path d="M5.366,14.943H3.982a1.029,1.029,0,0,0,0,2.057H5.366A1.029,1.029,0,1,0,5.366,14.943Z" />
              </svg>
            </li>

            <li class="eapl-network-nav__menu-item eapl-network-nav__ea-logo">
              <a href="https://www.ea.com">
                <iron-icon icon="ea-network-nav-32:ea-logo" />
              </a>
            </li>
          </menu>
        </header>
        <div class="eapl-network-nav__body">
          <div class="eapl-network-nav__sections">
            <section
              link-target="profile"
              class="eapl-network-nav__section ea-network-nav--section-profile"
            >
              <ea-section
                slot="section"
                type="railed"
                layout="100"
                background-color="none"
                spacing-top="none"
                spacing-bottom="none"
                background-overflow="visible"
              >
                <ea-section-column
                  slot="section-column"
                  indent-left=""
                  indent-right=""
                  text-align="left"
                  class="eapl-section-column eapl-animate__section eapl-section-column-100"
                >
                  <ea-stream
                    layout="continuous"
                    tile-type="vertical"
                    tile-text-align="left"
                    tile-text-color="dark"
                    tile-color="light"
                    hide-brand-stroke=""
                    spacing-top="medium"
                    spacing-bottom="medium"
                    tile-media-shape="rectangle"
                    not-streamable=""
                    aligned-to-grid=""
                  />
                </ea-section-column>
              </ea-section>
            </section>

            <section
              link-target="help"
              class="eapl-network-nav__section ea-network-nav--section-help"
            >
              <ea-section
                slot="section"
                type="full-bleed"
                layout="100"
                background-color="none"
                spacing-top="large"
                spacing-bottom="none"
                background-overflow="visible"
              >
                <ea-section-column
                  slot="section-column"
                  text-align="center"
                  class="eapl-section-column eapl-animate__section eapl-section-column-100"
                >
                  <ea-subheading
                    type="ordered"
                    layout="small"
                    text-align="center"
                    text-color="light"
                    title-text="Besoin d'aide&nbsp;?"
                    spacing-top="medium"
                    spacing-bottom="small"
                  >
                    <h3>Besoin d'aide&nbsp;?</h3>
                  </ea-subheading>

                  <ea-stream
                    layout="continuous"
                    tile-type="vertical"
                    tile-text-align="center"
                    tile-text-color="light"
                    tile-color="brand"
                    hide-brand-stroke=""
                    spacing-top="none"
                    spacing-bottom="none"
                    tile-media-shape="rectangle"
                  />

                  <ea-text slot="text" text-color="light">
                    <p>
                      Vous ne trouvez pas ce que vous cherchez&nbsp;?
                      Rendez-vous sur{" "}
                      <a adhocenable="false" href="https://help.ea.com/fr/">
                        l'Aide EA
                      </a>
                      ,&nbsp;
                      <a adhocenable="false" href="http://answers.ea.com">
                        Answers HQ
                      </a>
                      &nbsp;ou sur{" "}
                      <a
                        adhocenable="false"
                        href="https://www.ea.com/fr-fr/forums"
                        // target="_blank"
                      >
                        EA Forums
                      </a>
                    </p>
                  </ea-text>
                </ea-section-column>
              </ea-section>
            </section>
          </div>
          <div class="eapl-network-nav__close">
            <iron-icon icon="ea-action-16:close" />
          </div>
        </div>
      </div>
    </div><ea-local-nav home-text="EA SPORTS FIFA 20" home-tooltip="EA SPORTS FIFA 20" home-link="https://www.ea.com/fr-fr/games/fifa/fifa-20" logo-image="https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-19/global-assets/common/logos/fifa-white.svg" theme="light" shelf-type="band" open-drawer-text="Menu" open-drawer-tooltip="Ouvrir le menu" close-drawer-text="Fermer" close-drawer-tooltip="Fermer le menu" mini="" hide-hamburger-on-desktop="" show-franchise-nav="" show-breadcrumbs="" class="eapl-local-nav-mini net-nav-onscreen">
    
        
            

    <ea-container filter-key="All" slot="franchise-game-box">
        <ea-game-box slot="game-box" background-image="https://media.contentapi.ea.com/content/dam/gin/images/2018/06/fifa-19-keyart.jpg.adapt.crop1x1.767w.jpg" background-image-alt-text="" logo-url="https://media.contentapi.ea.com/content/dam/gin/common/logos/fifa-19-mono-logo.png" main-link-url="/fr-fr/games/fifa/fifa-19" main-link-title="FIFA&nbsp;19" type="simple" show-back-alt="FIFA&nbsp;19" show-front-alt="FIFA&nbsp;19" title="FIFA&nbsp;19" sale-text="" scrim-color="none" scrim-opacity="medium">
            
            
            
    
            
            <a href="/fr-fr/games/fifa/fifa-19" title="FIFA&nbsp;19">FIFA&nbsp;19</a>
        </ea-game-box>
    </ea-container>
    
            
        
    
        
    
        
            <a title="EA SPORTS FIFA 20" href="https://www.ea.com/fr-fr/games/fifa/fifa-20">
                EA SPORTS FIFA 20
                
                    <img src="https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-19/global-assets/common/logos/fifa-white.svg"/>
                
            </a>
        
    
        
            
                
    
    <ea-local-nav-shelf-sub-nav slot="local-nav-shelf-link" toggle-text="FIFA 20" theme="light" type="narrow">
        
    
    <ea-local-nav-shelf-sub-nav-section title-text="À propos de FIFA 20" slot="sub-nav-section" theme="light">
        
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="VOLTA" link-href="/fr-fr/games/fifa/fifa-20/volta" link-target="_self" link-image="https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-20/images/2019/07/volta.png" theme="light">
        <a href="/fr-fr/games/fifa/fifa-20/volta">VOLTA</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="Jouabilité" link-href="/fr-fr/games/fifa/fifa-20/features" link-target="_self" link-image="https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-20/images/2019/07/gameplay.png" theme="light">
        <a href="/fr-fr/games/fifa/fifa-20/features">Jouabilité</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="Mode Carrière" link-href="/fr-fr/games/fifa/fifa-20/fifa-20-career-mode" link-target="_self" theme="light">
        <a href="/fr-fr/games/fifa/fifa-20/fifa-20-career-mode">Mode Carrière</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    </ea-local-nav-shelf-sub-nav-section>
    
    
    <ea-local-nav-shelf-sub-nav-section title-text="Découvrez les visages" slot="sub-nav-section" theme="light">
        
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="Édition Standard" link-href="/fr-fr/games/fifa/fifa-20/fifa-20-cover-star/standard-edition" link-target="_self" link-image="https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-20/images/2019/07/fifa20-navtile-16x9-standardedition.png" theme="light">
        <a href="/fr-fr/games/fifa/fifa-20/fifa-20-cover-star/standard-edition">Édition Standard</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="Édition Champions" link-href="/fr-fr/games/fifa/fifa-20/fifa-20-cover-star/champions-edition" link-target="_self" link-image="https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-20/images/2019/07/fifa20-navtile-16x9-championsedition.png" theme="light">
        <a href="/fr-fr/games/fifa/fifa-20/fifa-20-cover-star/champions-edition">Édition Champions</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="Édition Ultimate" link-href="/fr-fr/games/fifa/fifa-20/fifa-20-cover-star/ultimate-edition" link-target="_self" link-image="https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-20/images/2019/07/ultimate-edition-pre-reveal.png" theme="light">
        <a href="/fr-fr/games/fifa/fifa-20/fifa-20-cover-star/ultimate-edition">Édition Ultimate</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    </ea-local-nav-shelf-sub-nav-section>
    
    </ea-local-nav-shelf-sub-nav>
    
            
        
            
                
    
    <ea-local-nav-shelf-sub-nav slot="local-nav-shelf-link" toggle-text="VOLTA FOOTBALL" theme="light" type="simple">
        
    
    <ea-local-nav-shelf-sub-nav-section title-text="" slot="sub-nav-section" theme="light" simple="">
        
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="Fonctionnalités" link-href="/fr-fr/games/fifa/fifa-20/volta#features" link-target="_self" theme="light">
        <a href="/fr-fr/games/fifa/fifa-20/volta#features">Fonctionnalités</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="Personnalisation" link-href="/fr-fr/games/fifa/fifa-20/volta#customization" link-target="_self" theme="light">
        <a href="/fr-fr/games/fifa/fifa-20/volta#customization">Personnalisation</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="Jouabilité" link-href="/fr-fr/games/fifa/fifa-20/volta#gameplay" link-target="_self" theme="light">
        <a href="/fr-fr/games/fifa/fifa-20/volta#gameplay">Jouabilité</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="Jouez à votre façon" link-href="/fr-fr/games/fifa/fifa-20/volta#play-it-your-way" link-target="_self" theme="light">
        <a href="/fr-fr/games/fifa/fifa-20/volta#play-it-your-way">Jouez à votre façon</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    </ea-local-nav-shelf-sub-nav-section>
    
    </ea-local-nav-shelf-sub-nav>
    
            
        
            
                
    
    <ea-local-nav-shelf-sub-nav slot="local-nav-shelf-link" toggle-text="FIFA Ultimate Team" theme="light" type="simple">
        
    
    <ea-local-nav-shelf-sub-nav-section title-text="" slot="sub-nav-section" theme="light" simple="">
        
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="FONCTIONNALITÉS" link-href="/fr-fr/games/fifa/fifa-20/ultimate-team/features" link-target="_self" theme="light">
        <a href="/fr-fr/games/fifa/fifa-20/ultimate-team/features">FONCTIONNALITÉS</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="MATCHS AMICAUX FUT" link-href="/fr-fr/games/fifa/fifa-20/ultimate-team/features#friendlies" link-target="_self" theme="light">
        <a href="/fr-fr/games/fifa/fifa-20/ultimate-team/features#friendlies">MATCHS AMICAUX FUT</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="OBJECTIFS SAISONNIERS" link-href="/fr-fr/games/fifa/fifa-20/ultimate-team/features#season" link-target="_self" theme="light">
        <a href="/fr-fr/games/fifa/fifa-20/ultimate-team/features#season">OBJECTIFS SAISONNIERS</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="DE NOUVELLES FAÇONS DE JOUER" link-href="/fr-fr/games/fifa/fifa-20/ultimate-team/features#more-ways" link-target="_self" theme="light">
        <a href="/fr-fr/games/fifa/fifa-20/ultimate-team/features#more-ways">DE NOUVELLES FAÇONS DE JOUER</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="ICÔNES" link-href="/fr-fr/games/fifa/fifa-20/ultimate-team/fut-icons" link-target="_self" theme="light">
        <a href="/fr-fr/games/fifa/fifa-20/ultimate-team/fut-icons">ICÔNES</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    </ea-local-nav-shelf-sub-nav-section>
    
    </ea-local-nav-shelf-sub-nav>
    
            
        
            
                
    
    <ea-local-nav-shelf-sub-nav slot="local-nav-shelf-link" toggle-text="Infos et mises à jour" theme="light" type="simple">
        
    
    <ea-local-nav-shelf-sub-nav-section title-text="" slot="sub-nav-section" theme="light" simple="">
        
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="Infos FIFA" link-href="/fr-fr/games/fifa/fifa-20/news" link-target="_self" theme="light">
        <a href="/fr-fr/games/fifa/fifa-20/news">Infos FIFA</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="Mise à jour par e-mail" link-href="/fr-fr/games/fifa/fifa-20/newsletter" link-target="_self" theme="light">
        <a href="/fr-fr/games/fifa/fifa-20/newsletter">Mise à jour par e-mail</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    </ea-local-nav-shelf-sub-nav-section>
    
    </ea-local-nav-shelf-sub-nav>
    
            
        
            
                
    
    <ea-local-nav-shelf-sub-nav slot="local-nav-shelf-link" toggle-text="Compétitions FIFA" theme="light" type="simple">
        
    
    <ea-local-nav-shelf-sub-nav-section title-text="" slot="sub-nav-section" theme="light" simple="">
        
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="Accueil Global Series" link-href="/fr-fr/games/fifa/fifa-19/compete" link-target="_self" theme="light">
        <a href="/fr-fr/games/fifa/fifa-19/compete">Accueil Global Series</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="Aperçu" link-href="/fr-fr/games/fifa/fifa-19/compete/overview" link-target="_self" theme="light">
        <a href="/fr-fr/games/fifa/fifa-19/compete/overview">Aperçu</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="Règlement officiel" link-href="/fr-fr/games/fifa/fifa-19/compete/fifa-19-global-series-official-rules" link-target="_self" theme="light">
        <a href="/fr-fr/games/fifa/fifa-19/compete/fifa-19-global-series-official-rules">Règlement officiel</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="Classements" link-href="http://fifa.gg/" link-target="_blank" theme="light">
        <a href="http://fifa.gg/">Classements</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="Infos compétitions FIFA" link-href="/fr-fr/games/fifa/fifa-19/compete/news" link-target="_self" theme="light">
        <a href="/fr-fr/games/fifa/fifa-19/compete/news">Infos compétitions FIFA</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    </ea-local-nav-shelf-sub-nav-section>
    
    </ea-local-nav-shelf-sub-nav>
    
            
        
            
                
    
    <ea-local-nav-shelf-sub-nav slot="local-nav-shelf-link" toggle-text="Communauté" theme="light" type="simple">
        
    
    <ea-local-nav-shelf-sub-nav-section title-text="" slot="sub-nav-section" theme="light" simple="">
        
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="Forums" link-href="https://fifaforums.easports.com/categories" link-target="_blank" theme="light">
        <a href="https://fifaforums.easports.com/categories">Forums</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="Recrutement talent EA Sports FIFA" link-href="/fr-fr/games/fifa/fifa-19/news/fifa-ea-talent-scout-team" link-target="_self" theme="light">
        <a href="/fr-fr/games/fifa/fifa-19/news/fifa-ea-talent-scout-team">Recrutement talent EA Sports FIFA</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    
    <ea-local-nav-shelf-sub-nav-section-link slot="sub-nav-section-link" link-text="PAROLES DE DÉVELOPPEURS" link-href="/fr-fr/games/fifa/fifa-20/pitch-notes" link-target="_self" theme="light">
        <a href="/fr-fr/games/fifa/fifa-20/pitch-notes">PAROLES DE DÉVELOPPEURS</a>
    </ea-local-nav-shelf-sub-nav-section-link>
    
    </ea-local-nav-shelf-sub-nav-section>
    
    </ea-local-nav-shelf-sub-nav>
    
            
        
    
        
    
        
            
                
    
    
        <ea-local-nav-drawer-sub-nav slot="local-nav-drawer-link" toggle-text="FIFA 20" toggle-tooltip="FIFA 20" theme="light" type="standard" class="eapl-local-nav__drawer-item--first-child">
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-20/volta" link-title="VOLTA" link-text="VOLTA" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-20/volta">VOLTA</a>
        </ea-link>
    
    
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-20/news/fifa-20-gameplay" link-title="Jouabilité" link-text="Jouabilité" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-20/news/fifa-20-gameplay">Jouabilité</a>
        </ea-link>
    
    
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-20/fifa-20-career-mode" link-title="Mode Carrière" link-text="Mode Carrière" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-20/fifa-20-career-mode">Mode Carrière</a>
        </ea-link>
    
    
            
        </ea-local-nav-drawer-sub-nav>
    
    
            
                
    
    
        <ea-local-nav-drawer-sub-nav slot="local-nav-drawer-link" toggle-text="Découvrez les visages" toggle-tooltip="" theme="light" type="standard">
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-20/fifa-20-cover-star/standard-edition" link-title="" link-text="Édition Standard" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-20/fifa-20-cover-star/standard-edition">Édition Standard</a>
        </ea-link>
    
    
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-20/fifa-20-cover-star/champions-edition" link-title="" link-text="Édition Champions" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-20/fifa-20-cover-star/champions-edition">Édition Champions</a>
        </ea-link>
    
    
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-20/fifa-20-cover-star/ultimate-edition" link-title="" link-text="Édition Ultimate" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-20/fifa-20-cover-star/ultimate-edition">Édition Ultimate</a>
        </ea-link>
    
    
            
        </ea-local-nav-drawer-sub-nav>
    
    
            
                
    
    
        <ea-local-nav-drawer-sub-nav slot="local-nav-drawer-link" toggle-text="VOLTA FOOTBALL" toggle-tooltip="VOLTA FOOTBALL" theme="light" type="standard">
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-20/volta#features" link-title="" link-text="Fonctionnalités" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-20/volta#features">Fonctionnalités</a>
        </ea-link>
    
    
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-20/volta#customization" link-title="" link-text="Personnalisation" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-20/volta#customization">Personnalisation</a>
        </ea-link>
    
    
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-20/volta#gameplay" link-title="" link-text="Jouabilité" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-20/volta#gameplay">Jouabilité</a>
        </ea-link>
    
    
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-20/volta#play-it-your-way" link-title="" link-text="Jouez à votre façon" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-20/volta#play-it-your-way">Jouez à votre façon</a>
        </ea-link>
    
    
            
        </ea-local-nav-drawer-sub-nav>
    
    
            
                
    
    
        <ea-local-nav-drawer-sub-nav slot="local-nav-drawer-link" toggle-text="Infos et mises à jour" toggle-tooltip="Infos et mises à jour" theme="light" type="standard">
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-20/news" link-title="Infos FIFA" link-text="Infos FIFA" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-20/news">Infos FIFA</a>
        </ea-link>
    
    
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-20/newsletter" link-title="Mise à jour par e-mail" link-text="Mise à jour par e-mail" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-20/newsletter">Mise à jour par e-mail</a>
        </ea-link>
    
    
            
        </ea-local-nav-drawer-sub-nav>
    
    
            
                
    
    
        <ea-local-nav-drawer-sub-nav slot="local-nav-drawer-link" toggle-text="Compétitions FIFA" toggle-tooltip="Compétitions FIFA" theme="light" type="standard">
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-19/compete" link-title="Accueil Global Series" link-text="Accueil Global Series" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-19/compete">Accueil Global Series</a>
        </ea-link>
    
    
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-19/compete/overview" link-title="Aperçu" link-text="Aperçu" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-19/compete/overview">Aperçu</a>
        </ea-link>
    
    
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-19/compete/fifa-19-global-series-official-rules" link-title="Règlement officiel" link-text="Règlement officiel" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-19/compete/fifa-19-global-series-official-rules">Règlement officiel</a>
        </ea-link>
    
    
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="http://fifa.gg/" link-title="Classements" link-text="Classements" text-color="dark">
            <a href="http://fifa.gg/">Classements</a>
        </ea-link>
    
    
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-19/compete/news" link-title="Infos compétitions FIFA" link-text="Infos compétitions FIFA" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-19/compete/news">Infos compétitions FIFA</a>
        </ea-link>
    
    
            
        </ea-local-nav-drawer-sub-nav>
    
    
            
                
    
    
        <ea-local-nav-drawer-sub-nav slot="local-nav-drawer-link" toggle-text="Communauté" toggle-tooltip="Communauté" theme="light" type="standard">
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="https://fifaforums.easports.com/categories" link-title="Forums" link-text="Forums" text-color="dark">
            <a href="https://fifaforums.easports.com/categories">Forums</a>
        </ea-link>
    
    
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/games/fifa/fifa-19/news/fifa-ea-talent-scout-team" link-title="Recrutement talent EA Sports FIFA" link-text="Recrutement talent EA Sports FIFA" text-color="dark">
            <a href="/games/fifa/fifa-19/news/fifa-ea-talent-scout-team">Recrutement talent EA Sports FIFA</a>
        </ea-link>
    
    
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-20/pitch-notes" link-title="PAROLES DE DÉVELOPPEURS" link-text="PAROLES DE DÉVELOPPEURS" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-20/pitch-notes">PAROLES DE DÉVELOPPEURS</a>
        </ea-link>
    
    
            
        </ea-local-nav-drawer-sub-nav>
    
    
            
                
    
    
        <ea-local-nav-drawer-sub-nav slot="local-nav-drawer-link" toggle-text="OBTENEZ FIFA&nbsp;20" toggle-tooltip="OBTENEZ FIFA&nbsp;20" theme="light" type="standard">
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-20/buy/ps4" link-title="PS4" link-text="PS4" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-20/buy/ps4">PS4</a>
        </ea-link>
    
    
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-20/buy/pc" link-title="Origin" link-text="Origin" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-20/buy/pc">Origin</a>
        </ea-link>
    
    
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-20/buy/xbox-one" link-title="Xbox One" link-text="Xbox One" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-20/buy/xbox-one">Xbox One</a>
        </ea-link>
    
    
            
                
    
    
        <ea-link slot="local-nav-drawer-sub-link" class="eapl-local-nav__drawer-sub-link" link-href="/fr-fr/games/fifa/fifa-20/buy/switch" link-title="Legacy Edition" link-text="Legacy Edition" text-color="dark">
            <a href="/fr-fr/games/fifa/fifa-20/buy/switch">Legacy Edition</a>
        </ea-link>
    
    
            
        </ea-local-nav-drawer-sub-nav>
    
    
            
        
        
        
            
    
    
        <ea-cta-dropdown slot="cta-dropdown" theme="light" cta-title-text="OBTENEZ FIFA&nbsp;20" cta-link="/fr-fr/games/fifa/fifa-20/buy" border-color="none" fill-color="brand" text-color="dark">
            
                <ea-container>
                    
    
    <ea-cta slot="cta" type="standard" link-url="/fr-fr/games/fifa/fifa-20/buy/ps4" link-text="PS4" icon="none" fill-color="none" text-color="light" stroke-color="light" intent="buy" emphasis="primary" class="eapl-cta-first" context="ea-local-nav">
        <a href="/fr-fr/games/fifa/fifa-20/buy/ps4">
            
                PS4
            
        </a>
    </ea-cta>
    
                </ea-container>
            
                <ea-container>
                    
    
    <ea-cta slot="cta" type="standard" link-url="/fr-fr/games/fifa/fifa-20/buy/pc" link-text="Origin" icon="none" fill-color="none" text-color="light" stroke-color="light" intent="buy" emphasis="primary" class="eapl-cta-first" context="ea-local-nav">
        <a href="/fr-fr/games/fifa/fifa-20/buy/pc">
            
                Origin
            
        </a>
    </ea-cta>
    
                </ea-container>
            
                <ea-container>
                    
    
    <ea-cta slot="cta" type="standard" link-url="/fr-fr/games/fifa/fifa-20/buy/xbox-one" link-text="Xbox One" icon="none" fill-color="none" text-color="light" stroke-color="light" intent="buy" emphasis="primary" class="eapl-cta-first" context="ea-local-nav">
        <a href="/fr-fr/games/fifa/fifa-20/buy/xbox-one">
            
                Xbox One
            
        </a>
    </ea-cta>
    
                </ea-container>
            
                <ea-container>
                    
    
    <ea-cta slot="cta" type="standard" link-url="/fr-fr/games/fifa/fifa-20/buy/switch" link-text="Legacy Edition" icon="none" fill-color="none" text-color="light" stroke-color="light" intent="buy" emphasis="primary" class="eapl-cta-first" context="ea-local-nav">
        <a href="/fr-fr/games/fifa/fifa-20/buy/switch">
            
                Legacy Edition
            
        </a>
    </ea-cta>
    
                </ea-container>
            
    
            
        </ea-cta-dropdown>
    
    
        
    </ea-local-nav></>
  );
};
