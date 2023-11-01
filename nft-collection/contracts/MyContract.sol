// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC721Base.sol";
import "@thirdweb-dev/contracts/extension/PermissionsEnumerable.sol";

contract MyContract is ERC721Base ,PermissionsEnumerable {
    bytes32 public constant NICKNAME_ROLE = keccak256("NICKNAME_ROLE");
      constructor(
        address _defaultAdmin,
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps
    )
        ERC721Base(
            _defaultAdmin,
            _name,
            _symbol,
            _royaltyRecipient,
            _royaltyBps
        )
    {
        // _setupRole(_defaultAdmin , msg.sender);
        _setupRole(NICKNAME_ROLE, msg.sender);
    }
    mapping (uint256 => string) public tokenNickname;
    function updateTokenNickName(uint256 _tokenId , string calldata _nickname) public  onlyRole(NICKNAME_ROLE) {
        tokenNickname[_tokenId] = _nickname;
    }


}