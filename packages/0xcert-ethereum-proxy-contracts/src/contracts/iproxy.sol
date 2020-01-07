pragma solidity 0.6.1;

/**
 * @dev Standard interface for a distributed exchange proxy contract.
 */
interface Proxy {

  /**
   * @dev Executes an action.
   * @param _target Target of execution.
   * @param _a Address usually representing from.
   * @param _b Address usually representing to.
   * @param _c Integer usually repersenting amount/value/id.
   */
  function execute(
    address _target,
    address _a,
    address _b,
    uint256 _c
  )
    external;
    
}
