import { Trans } from "@lingui/macro";
import { BigNumber } from "ethers";
import { USD_DECIMALS } from "lib/legacy";
import "./StatsTooltip.css";
import { formatAmount } from "lib/numbers";

type Props = {
  title: string;
  total?: BigNumber;
  avaxValue?: BigNumber;
  arbitrumValue?: BigNumber;
  showDollar?: boolean;
  decimalsForConversion: number;
  symbol: string;
};

export default function StatsTooltip({
  title,
  total,
  avaxValue,
  arbitrumValue,
  showDollar = true,
  decimalsForConversion = USD_DECIMALS,
  symbol,
}: Props) {
  return (
    <>
      <p className="Tooltip-row">
        <span className="label">
          <Trans>{title} on Arbitrum:</Trans>
        </span>
        <span className="amount">
          {showDollar && "$"}
          {formatAmount(arbitrumValue, decimalsForConversion, 0, true)}
          {!showDollar && symbol && " " + symbol}
        </span>
      </p>
      <p className="Tooltip-row">
        <span className="label">
          <Trans>{title} on Avalanche:</Trans>
        </span>
        <span className="amount">
          {showDollar && "$"}
          {formatAmount(avaxValue, decimalsForConversion, 0, true)}
          {!showDollar && symbol && " " + symbol}
        </span>
      </p>
      <div className="Tooltip-divider" />
      <p className="Tooltip-row">
        <span className="label">
          <Trans>Total:</Trans>
        </span>
        <span className="amount">
          {showDollar && "$"}
          {formatAmount(total, decimalsForConversion, 0, true)}
          {!showDollar && symbol && " " + symbol}
        </span>
      </p>
    </>
  );
}
