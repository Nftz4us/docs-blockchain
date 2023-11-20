import { DefaultTheme } from 'vitepress';

const navbar: DefaultTheme.NavItem[] = [
    {
        text: 'Tutorials',
        items: [
            //
            { text: 'Basics', link: '/tutorials/general/basics/index' },
            { text: 'Smart Contracts', link: '/tutorials/smart-contracts/index' },
            { text: 'Uniq Factories', link: '/tutorials/uniq-factories/index' },
            { text: 'Token Swap', link: '/tutorials/token-swap/index' },
        ],
    },
    {
        text: 'Game Developers',
        items: [
            //
            { text: 'Overview', link: '/game-developers/index' },
            { text: 'Game Developer Center', link: '/game-developers/game-dev-center/index' },
            { text: 'Unity', link: '/game-developers/unity/index' },
            { text: 'Unreal', link: '/game-developers/unreal/index' },
            { text: 'Web', link: '/game-developers/web/index' },
        ],
    },
    {
        text: 'Products',
        items: [
            //
            { text: 'Quick Links', link: '/products/index' },
            { text: 'Ultra Wallet', link: '/products/ultra-wallet/index' },
            { text: 'Chain API', link: '/products/chain-api/index' },
            { text: 'NFT API', link: '/products/nft-api/index' },
        ],
    },
    {
        text: 'Blockchain',
        items: [
            //
            { text: 'Overview', link: '/blockchain/general/index' },
            { text: 'Block Producers', link: '/blockchain/block-producers/index' },
            { text: 'Contracts', link: '/blockchain/contracts/index' },
        ],
    },
];

export default navbar;
