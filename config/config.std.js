module.exports = {
  startup: {
    chain: true,
  },
  chain: {
    name: "Musicoin - Pi",
    path: "{process.cwd}/bin/go-musicoin/",
    command: './gmc',
    args: [
      '--verbosity=6',
      '--rpc',
      '--rpcapi=admin,db,eth,net,web3,personal,miner',
      '--rpcport', '8545',
      '--rpcaddr', '127.0.0.1',
      '--rpccorsdomain', 'localhost'],
    rpcServer: 'http://localhost:8545'
  }
}
