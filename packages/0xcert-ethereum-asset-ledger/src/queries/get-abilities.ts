import { Connector } from "@0xcert/ethereum-connector";
import { AssetLedgerAbility } from "@0xcert/scaffold";
import xcertAbi from '../config/xcertAbi';

/**
 * 
 */
export default async function(connector: Connector, ledgerId: string, accountId: string) {
  return await Promise.all(
    [ AssetLedgerAbility.MANAGE_ABILITIES,
      AssetLedgerAbility.MINT_ASSET,
      AssetLedgerAbility.PAUSE_TRANSFER,
      AssetLedgerAbility.REVOKE_ASSET,
      AssetLedgerAbility.SIGN_MINT_CLAIM,
      AssetLedgerAbility.UPDATE_PROOF,
    ].map(async (ability) => {
      return connector.queryContract({
        to: ledgerId,
        abi: xcertAbi.find((a) => a.name === 'isAble'),
        data: [accountId, ability],
        tag: 'latest',
      }).then((r) => {
        return r[0] ? ability : -1;
      });
    })
  ).then((abilities) => {
    return abilities.filter((a) => a !== -1).sort();
  });
}