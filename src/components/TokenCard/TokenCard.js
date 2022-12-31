import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Trans } from "@lingui/macro";

import gmxBigIcon from "img/ic_gmx_custom.svg";
import glpBigIcon from "img/ic_glp_custom.svg";

import { isHomeSite } from "lib/legacy";

import { useWeb3React } from "@web3-react/core";

import APRLabel from "../APRLabel/APRLabel";
import { HeaderLink } from "../Header/HeaderLink";
import { ARBITRUM, AVALANCHE, FANTOM } from "config/chains";
import { switchNetwork } from "lib/wallets";
import { useChainId } from "lib/chains";
import ExternalLink from "components/ExternalLink/ExternalLink";
import { useHistory } from "react-router-dom";

export default function TokenCard({ showRedirectModal, redirectPopupTimestamp }) {
  const isHome = isHomeSite();
  const history = useHistory();
  const isLanding = history.location.pathname === "/" ? true : false;
  const { chainId } = useChainId();
  const { active } = useWeb3React();

  const changeNetwork = useCallback(
    (network) => {
      if (network === chainId) {
        return;
      }
      if (!active) {
        setTimeout(() => {
          return switchNetwork(network, active);
        }, 500);
      } else {
        return switchNetwork(network, active);
      }
    },
    [chainId, active]
  );

  const BuyLink = ({ className, to, children, network }) => {
    if (isLanding && showRedirectModal) {
      return (
        <HeaderLink
          to={to}
          className={className}
          redirectPopupTimestamp={redirectPopupTimestamp}
          showRedirectModal={showRedirectModal}
        >
          {children}
        </HeaderLink>
      );
    }

    return (
      <Link to={to} className={className} onClick={() => changeNetwork(network)}>
        {children}
      </Link>
    );
  };

  return (
    <div className="Home-token-card-options">
      <div className="Home-token-card-option">
        <div className="Home-token-card-option-icon">
          <img src={gmxBigIcon} alt="mmyBigIcon" /> MMY
        </div>
        <div className="Home-token-card-option-info">
          <div className="Home-token-card-option-title">
            <Trans>MMY is the utility and governance token. Accrues 30% of the platform's generated fees.</Trans>
          </div>
          <div className="Home-token-card-option-apr">
            {/* <Trans>Arbitrum APR:</Trans> <APRLabel chainId={ARBITRUM} label="gmxAprTotal" />,{" "} */}
            <Trans>APR:</Trans> <APRLabel chainId={FANTOM} label="gmxAprTotal" key="FANTOM" />
          </div>
          <div className="Home-token-card-option-action">
            <div className="buy">
              <BuyLink to="/buy_mmy" className="default-btn" network={FANTOM}>
                <Trans>Buy</Trans>
              </BuyLink>
              {/* <ExternalLink href="https://spooky.fi/#/swap?inputCurrency=0x04068DA6C83AFCFA0e13ba15A6696662335D5B75&outputCurrency=0x01e77288b38b416F972428d562454fb329350bAc" className="default-btn read-more">
                <Trans>Buy</Trans>
              </ExternalLink> */}
              {/* <BuyLink to="/buy_mmy" className="default-btn" network={ARBITRUM}>
                <Trans>Buy on Arbitrum</Trans>
              </BuyLink>
              <BuyLink to="/buy_mmy" className="default-btn" network={AVALANCHE}>
                <Trans>Buy on Avalanche</Trans>
              </BuyLink> */}
            </div>
            <ExternalLink href="https://docs.mummy.finance/tokenomics" className="default-btn read-more">
              <Trans>Read more</Trans>
            </ExternalLink>
          </div>
        </div>
      </div>
      <div className="Home-token-card-option">
        <div className="Home-token-card-option-icon">
          <img src={glpBigIcon} alt="mlpBigIcon" /> MLP
        </div>
        <div className="Home-token-card-option-info">
          <div className="Home-token-card-option-title">
            <Trans>MLP is the liquidity provider token. Accrues 60% of the platform's generated fees.</Trans>
          </div>
          <div className="Home-token-card-option-apr">
            {/* <Trans>Arbitrum APR:</Trans> <APRLabel chainId={ARBITRUM} label="glpAprTotal" key="ARBITRUM" />,{" "} */}
            <Trans>APR:</Trans> <APRLabel chainId={FANTOM} label="glpAprTotal" key="FANTOM" />
            {/* <Trans>APR:</Trans> --% */}
          </div>
          <div className="Home-token-card-option-action">
            <div className="buy">
              {isLanding ?
                <ExternalLink href="https://app.mummy.finance/#/buy_mlp" className="default-btn read-more">
                  <Trans>Buy</Trans>
                </ExternalLink>
                :
                <BuyLink to="/buy_mlp" className="default-btn" network={FANTOM}>
                  <Trans>Buy</Trans>
                </BuyLink>
              }

              {/* <BuyLink to="/buy_mlp" className="default-btn" network={ARBITRUM}>
                <Trans>Buy on Arbitrum</Trans>
              </BuyLink>
              <BuyLink to="/buy_mlp" className="default-btn" network={AVALANCHE}>
                <Trans>Buy on Avalanche</Trans>
              </BuyLink> */}
            </div>
            <a
              href="https://docs.mummy.finance/mlp"
              target="_blank"
              rel="noreferrer"
              className="default-btn read-more"
            >
              <Trans>Read more</Trans>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
