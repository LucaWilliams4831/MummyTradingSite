import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Trans } from "@lingui/macro";

import gmxBigIcon from "img/ic_gmx_custom.svg";
import glpBigIcon from "img/ic_glp_custom.svg";

import { isHomeSite } from "lib/legacy";

import { useWeb3React } from "@web3-react/core";

import { HeaderLink } from "../Header/HeaderLink";
import { ARBITRUM } from "config/chains";
import { switchNetwork } from "lib/wallets";
import { useChainId } from "lib/chains";
import ExternalLink from "components/ExternalLink/ExternalLink";

export default function TokenCard({ showRedirectModal, redirectPopupTimestamp }) {
  const isHome = isHomeSite();
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
    if (isHome && showRedirectModal) {
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
          <img src={gmxBigIcon} alt="gmxBigIcon" /> MMY
        </div>
        <div className="Home-token-card-option-info">
          <div className="Home-token-card-option-title">
            <Trans>MMY is the utility and governance token, Accrues 30% of the platform's generated fees.</Trans>
          </div>
          <div className="Home-token-card-option-apr">61.04%</div>
          <div className="Home-token-card-option-action">
            <div className="buy">
              <a
                href="https://spooky.fi/#/swap?inputCurrency=0x04068DA6C83AFCFA0e13ba15A6696662335D5B75&outputCurrency=0x01e77288b38b416F972428d562454fb329350bAc"
                class="link-underline default-btn read-more"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy
              </a>
            </div>
            <ExternalLink href="https://docs.mummy.finance/tokenomics" className="default-btn read-more">
              <Trans>Read more</Trans>
            </ExternalLink>
          </div>
        </div>
      </div>
      <div className="Home-token-card-option">
        <div className="Home-token-card-option-icon">
          <img src={glpBigIcon} alt="glpBigIcon" /> MLP
        </div>
        <div className="Home-token-card-option-info">
          <div className="Home-token-card-option-title">
            <Trans>MLP is the liquiditiy provider token. Accrues 60% of the platform's generated fees.</Trans>
          </div>
          <div className="Home-token-card-option-apr">APR: 101.77%</div>
          <div className="Home-token-card-option-action">
            <div className="buy">
              <BuyLink to="/buy_mlp" className="default-btn" network={ARBITRUM}>
                <Trans>Buy</Trans>
              </BuyLink>
            </div>
            <a href="https://docs.mummy.finance/mlp" target="_blank" rel="noreferrer" className="default-btn read-more">
              <Trans>Read more</Trans>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
