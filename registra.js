


var galaxyMining = {
    account: null,
    contract: null,
    userAccount: null,
    secondContract: null ,

    connectContract: async function() {
             const ABI =[{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"address","name":"ADContract","type":"address"},{"internalType":"uint256","name":"Vpercent","type":"uint256"},{"internalType":"uint256","name":"ForHold","type":"uint256"},{"internalType":"address","name":"_existingContractAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"A","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"UserToUpgrade","type":"address"},{"internalType":"uint256","name":"LevelToBuy","type":"uint256"}],"name":"BuyLevel","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"UserToUpgrade","type":"address"},{"internalType":"uint256","name":"LevelToBuy","type":"uint256"}],"name":"BuyLevelByOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"UserToCheck","type":"address"}],"name":"CheckUserLastUpdate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"Check_IsUPdate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim_DIV","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"G56Matrix","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"USER","type":"address"}],"name":"GetDivPerSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"_To","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"HoldFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_To","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"HoldFundsbyAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"IsUpdate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"LastUpdate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Level10Income","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NumberOfUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"SetRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newpercent","type":"uint256"}],"name":"SetVirtualPercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"NewAddress","type":"address"}],"name":"SetWeeklyAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userTo","type":"address"}],"name":"UpdateIsUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"UserTo","type":"address"}],"name":"UpdateLastUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"UplineEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"UserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"VirtualParent","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WeeklyContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"availableDiv","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"calculateDiv","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"checkUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"directIncomefrom10","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"directPartnersCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"divPerSecInEther","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"existingContract","outputs":[{"internalType":"contract IExistingContract","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"freeIncome","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getDirectPartnersFrom","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastLevelBuyer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getRefferers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getVirtualParent","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"hasLevel","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_referrer","type":"address"},{"internalType":"uint256","name":"_requiredLevel","type":"uint256"}],"name":"hasRequiredLevel","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"idToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"l","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastDivClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastLevelBuyer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"levelPrices","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseSystem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"randomUser","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"registrationFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newfees","type":"uint256"}],"name":"setholdingFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"systemPause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalDivClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInevest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLevels","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpauseSystem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"USERTO","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateDivPerSecByOWner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userPartners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userVirtualPartners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"virtualReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
          const Address = "0x888d423eFE72b6D31D89fa2e7f6c073802EE56E2";


          try {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            this.account = (await web3.eth.getAccounts())[0];
            this.contract = new web3.eth.Contract(ABI, Address);
            console.log("Connected to smart contract");
        } catch (error) {
            console.error("Error connecting to contract: ", error);
        }
    },

    connectSecondContract: async function() {
        const secondABI =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"DeleteNickName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"HasNickName","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"NickTo","type":"string"}],"name":"UpdateNickname","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"NickTo","type":"string"},{"internalType":"address","name":"addressOwner","type":"address"}],"name":"UpdateNicknameByowner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"User","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"UserNickname","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasChanged","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"idToAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberOfNamedUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"nickName","type":"string"}],"name":"setAnickname","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"nickName","type":"string"},{"internalType":"address","name":"addressOwner","type":"address"}],"name":"setAnicknameByowner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

     const secondAddress = "0x561CA68d0aedDb822c8217eD7F01Fd2e1FfB9c59";


     try {
       window.web3 = new Web3(window.ethereum);
       await window.ethereum.request({ method: 'eth_requestAccounts' });
       this.account = (await web3.eth.getAccounts())[0];
       this.secondContract = new web3.eth.Contract(secondABI, secondAddress);
       console.log("Connected to smart contract");
   } catch (error) {
       console.error("Error connecting to contract: ", error);
   }
},


   registerUserWithReferrer: async function(referrerId) {
    if (!this.contract) {
        alert("You are not connected to the smart contract.");
        return;
    }

    try {
        const referrerAddress = await this.contract.methods.idToAddress(referrerId).call();

        if (referrerAddress) {
            console.log("Referrer address found:", referrerAddress);
        } else {
            console.log("No address found for the provided referrer ID.");
            return;
        }

        const userAddress = this.userAccount; 
        const registrationFee = web3.utils.toWei('0.02', 'ether');

        const userBalance = await web3.eth.getBalance(userAddress);

        if (BigInt(userBalance) >= BigInt(registrationFee)) {
            const response = await this.contract.methods.registerUser(userAddress, referrerAddress).send({ from: userAddress, value: registrationFee });
            console.log("Registration successful:", response);
                  const transactionHash = response.transactionHash;

        this.sendTelegramNotification(userAddress, referrerAddress, transactionHash);
        
            alert("Registration successful!");
           
            window.location.href = 'dashboardd.html';

        } else {
            alert("Your balance is insufficient to cover the registration fee.");
        }

    } catch (error) {
        console.error("Error during registration with referrer:", error);
        alert("An error occurred during registration with referrer.");
    }
},

sendTelegramNotification: async function(userAddress, referrerAddress, transactionHash) {
    const bscScanUrl = `https://bscscan.com/tx/${transactionHash}`;
  const message = `
<b>🌟 New Registration Completed 🌟</b>

<b>User Address:</b>
<code>${userAddress}</code>

<b>Referrer Address:</b>
<code>${referrerAddress}</code>

<b>Transaction:</b>
<a href="${bscScanUrl}">🔗 View on BSC Scan</a>
`;

    const botToken = '6888284635:AAHi2LbLRgruq5bwNwOsbEqapViCAO-PZdo'; // Remplacez par votre vrai token bot
    const chatId = '-1001887388827'; 
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const apiPhotoUrl = `https://api.telegram.org/bot${botToken}/sendPhoto`;

    // Envoi du message texte
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML'
            })
        });
        const responseData = await response.json();
        console.log('Message sent to Telegram:', responseData);
    } catch (error) {
        console.error('Failed to send message to Telegram:', error);
    }

    // Envoi de l'image depuis une URL
    try {
        await fetch(apiPhotoUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                photo: 'https://dev.galaxy-mining.space/new.png' // Assurez-vous que l'URL est une chaîne de caractères
            })
        });
    } catch (error) {
        console.error('Failed to send photo to Telegram:', error);
    }
},
    
    checkRegistrationStatus: async function() {
        if (window.ethereum && this.contract) {
            try {
                const accounts = await web3.eth.getAccounts();
                if (accounts.length === 0) {
                    console.log("No Ethereum account found.");
                    return;
                }

                this.userAccount = accounts[0];
                const isRegistered = await this.contract.methods.isRegistered(this.userAccount).call();

                if (isRegistered) {
                    alert("You are already registered. Now you will automatically be redirected to your account.");
                    window.location.href = 'dashboardd.html';
                }
            } catch (error) {
                console.error("Error checking registration status:", error);
            }
        } else {
            console.log("Ethereum environment or contract not found.");
        }
    },


    connectWallet: async function() {
    if (window.ethereum) {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            this.userAccount = accounts[0];
            this.updateWalletButton();

            // Mettre à jour le texte dans #contractStatus
            const contractStatus = document.getElementById("contractStatus");
            if (this.contract) {
                contractStatus.textContent = "Connected to smart contract";
            } else {
                contractStatus.textContent = "Not connected to smart contract";
            }

            // Autres actions après la connexion au portefeuille...
        } catch (error) {
            console.error("Error connecting to wallet:", error);
        }
    } else {
        console.log("Ethereum environment not detected. Please install MetaMask!");

        // Mettre à jour le texte dans #contractStatus
        const contractStatus = document.getElementById("contractStatus");
        contractStatus.textContent = "Bnb Smart Chain environment not detected. Please install MetaMask!";
    }
},



    updateWalletButton:async function() {
        const connectButton = document.getElementById('connectWalletButton');
        if (this.userAccount) {
            const truncatedAddress = this.userAccount.substr(0, 6) + '...' + this.userAccount.substr(-4);
            connectButton.textContent = truncatedAddress;
            // Ajoutez des styles supplémentaires si nécessaire
        } else {
            connectButton.textContent = "Connect Wallet";
        }
    },


    getUserEtherBalance: async function() {
        if (!this.userAccount) {
            console.error("User account is undefined.");
            return 0;
        }

        try {
            const balanceWei = await web3.eth.getBalance(this.userAccount);
            const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
            return parseFloat(balanceEther);
        } catch (error) {
            console.error("Error getting user Ether balance:", error);
            return 0;
        }
    },

    convertEtherToBNB: function(etherAmount) {
        return etherAmount;
    },

    checkBalanceAndUpdateDisplay: async function() {
        const requiredAmountBNB = 0.01; 
        const registrationFeeElement = document.getElementById('registrationFee');
        const balanceEther = await this.getUserEtherBalance();

        const balanceBNB = this.convertEtherToBNB(balanceEther);

        if (balanceBNB >= requiredAmountBNB) {
            registrationFeeElement.classList.add('balance-sufficient');
            registrationFeeElement.classList.remove('balance-insufficient');
        } else {
            registrationFeeElement.classList.add('balance-insufficient');
            registrationFeeElement.classList.remove('balance-sufficient');
        }
    },

    async getParrainValueFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('parrain');
    },
    
    async updateWelcomeMessage() {
        const parrainId = await this.getParrainValueFromURL(); // Use 'await' and 'this.' to call within the same object.
        if (!parrainId) return; // Exit if parrainId is null or empty.
    
        try {
            const parrainAddress = await this.contract.methods.idToAddress(parrainId).call();
            console.log(parrainAddress);
            const hasNickName = await this.secondContract.methods.HasNickName(parrainAddress).call(); 
            console.log(hasNickName)
            
            // Corrected method access.
            if (hasNickName) {
                const parrainNickname = await this.secondContract.methods.UserNickname(parrainAddress).call(); 
                    console.log(parrainNickname)
            
                    document.querySelector('.highlight-text').innerHTML = `<span class="golden-text">${parrainNickname}</span> is inviting you`;
                
            }
        } catch (error) {
            console.error("Error fetching parrain details:", error);
        }
    },
    
    async calculateBNBclaimed() {
        let TotalDivClaimed = 0;

        const NumberOfUsers = await this.contract.methods.NumberOfUsers().call();

        for (let UserID = 1; UserID <= NumberOfUsers; UserID++) {

            const UserAdress = await this.contract.methods.idToAddress(UserID).call();

            let DivClaimed = await this.contract.methods.totalDivClaimed(UserAdress).call();
       console.log("l'adress " +UserAdress +"a gagner " + DivClaimed +"BNB")

            TotalDivClaimed += parseFloat(DivClaimed);
            TotalDivBNB = TotalDivClaimed / 1000000000000000000;
            console.log(TotalDivClaimed)

        }

        return TotalDivBNB;
    },


    
init: async function() {
 await this.connectContract();
 await this.connectSecondContract();


 await this.connectWallet();
 await this.updateWalletButton();


 await this.calculateBNBclaimed();



const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
if (accounts.length === 0) {
   console.error("No Ethereum accounts found.");
   return;
}

this.userAccount = accounts[0];
const truncatedAddress = this.userAccount.substring(0, 6) + '...' + this.userAccount.substring(this.userAccount.length - 4);
$('.connectWalletButton').text(truncatedAddress);

const buttons = document.querySelectorAll('.buy-level-button');

buttons.forEach(button => {
  button.addEventListener('click', (event) => this.buyLevel(event));
});
}
};

$(document).ready(async () => {
    try {
        await galaxyMining.init();

        $('#registrationForm').submit(async function(e) {
            e.preventDefault();
            const referrerId = $('#parrain').val(); 

            if (!referrerId) {
                alert("Please enter the referrer's ID.");
                return;
            }

            try {
                await galaxyMining.registerUserWithReferrer(referrerId);
            } catch (error) {
                console.error("Error during registration with referrer:", error);
                alert("An error occurred during registration with referrer.");
            }
        });
    } catch (error) {
        console.error("Error during initialization:", error);
        alert("An error occurred during initialization.");

            
    var urlParams = new URLSearchParams(window.location.search);
    var parrainId = urlParams.get('parrain');

    if (parrainId) {
        $('#parrain').val(parrainId);
    }
    }
});


document.addEventListener('DOMContentLoaded', function() {
        // Extrait les paramètres de l'URL
        var urlParams = new URLSearchParams(window.location.search);
        var parrainId = urlParams.get('parrain');

        // Remplit le champ 'parrain' si un ID est présent
        if (parrainId) {
            document.getElementById('parrain').value = parrainId;
        }
    });



   

   
