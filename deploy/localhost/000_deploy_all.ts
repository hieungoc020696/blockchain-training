import { DeployFunction } from 'hardhat-deploy/types';
import 'hardhat-deploy-ethers';
import 'hardhat-deploy';

const run: DeployFunction = async (hre) => {
    const { ethers, deployments, getNamedAccounts } = hre;
    const { deploy, execute } = deployments;
    const { deployer } = await getNamedAccounts();

    await deploy('Dollar', {
        from: deployer,
        args: [],
        log: true,
    });
    await execute('Dollar', { from: deployer, log: true }, 'initialize', 'REDDOT Stablecoin', 'REDDOT');
}

run.tags = ['mock'];

run.skip = async (hre) => {
    return hre.network.name !== 'localhost' && hre.network.name !== 'hardhat';
};
export default run;