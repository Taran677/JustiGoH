let textArea = document.getElementsByClassName("textArea")[0]
let intro = async () => {
    return new Promise((resolve, reject) => {
        let myString = `
            ============================================================================
            WELCOME TO BLACKHAT TERMINAL INTERFACE                                              
            ============================================================================                                                                                       
     > System: DarkOS v3.0                                     
     > User: Anonymous                    
     > Access Level: ROOT                             
     > Encryption Protocol: AES-256                        
     > Firewall Status: Active                           
     > Connection Type: Secure VPN
     > Location: [REDACTED]                      
     > Time: ${new Date}                       
                                                              
     ============================================================================
                          COMMANDS                              
     ============================================================================
     help                - Display this help menu                      
     info                - Display system information                         
     scan [target]       - Conduct a network scan                    
     hack [target]       - Initiate a hacking attempt                           
     decrypt [file]      - Decrypt encrypted files                     
     encrypt [file]      - Encrypt files for secure transfer                  
     firewall [status]   - Check or modify firewall settings                     
     trace [target]      - Trace the origin of a connection    
     disconnect          - Terminate current session
     exit                - Exit Blackhat Terminal
     
     ============================================================================
                        RECENT LOGS
     ============================================================================
     - ${new Date}: Successful breach into Mainframe
     - ${new Date}: Encrypted sensitive data on Target A
     - ${new Date}: Evaded detection during intrusion
     
     ============================================================================
                       ALERT: HIGH RISK
     ============================================================================
     - Unauthorized access detected.
     - Intrusion detection system activated.
     - Initiating countermeasures.
     
     ============================================================================
               WARNING: UNAUTHORIZED ACCESS
    ============================================================================
     Access to this system is strictly prohibited. Any 
     unauthorized attempt will be reported to law enforcement.
     Disconnect immediately if you do not have clearance.
     ============================================================================`
        let i = 0
        let itl = setInterval(() => {
            i += 1
            textArea.getElementsByClassName("go")[0].innerHTML += myString[i]
            if (i == myString.length) {
                clearInterval(itl)
                resolve(89)
            }
        }, 1)

    }
    )

}



let r = async () => {
    return new Promise((resolve, reject) => {

        textArea.innerHTML = ""
        resolve(90)


    }
    )
}

let d = async () => {
    let h = await intro()
    let e = await r()
    console.log(h, e)
    let promiseAll = Promise.all([h, e])
    promiseAll.then((value) => {

        const a1 = async () => {
            return new Promise((resolve, reject) => {
                let gtg = document.createElement("div")
                gtg.setAttribute("class", "gtg")
                gtg.innerHTML = ""
                let str1 = "Hacking Data from user 'ITS KAUR BTW'"
                let j = 0
                let intrvl = setInterval(() => {
                    gtg.innerHTML += str1[j]
                    j += 1
                    if (j == str1.length) {
                        clearInterval(intrvl)
                        resolve(1)
                    }
                }, 50);
                textArea.appendChild(gtg)
            })
        }
        const a2 = async () => {
            return new Promise((resolve, reject) => {
                let gtg2 = document.createElement("div")
                gtg2.setAttribute("class", "gtg2")
                gtg2.innerHTML = ""
                let str2 = "........"
                let k = 0
                let intl1 = setInterval(() => {
                    gtg2.innerHTML += str2[k]
                    k += 1
                    if (k == str2.length) {
                        clearInterval(intl1)
                        resolve(2)
                    }
                }, 20);
                textArea.appendChild(gtg2)
            })
        }


        const a3 = async () => {
            return new Promise((resolve, reject) => {
                let gtg3 = document.createElement("div")
                gtg3.setAttribute("class", "gtg3")
                gtg3.innerHTML = ""
                let str3 = `Fetching details: User Name: Jaspreet Kaur,
         DOB: 18/08/2005, Fathers Name: Harjit Singh`
                let l = 0
                let intl2 = setInterval(() => {
                    gtg3.innerHTML += str3[l]
                    l += 1
                    if (l == str3.length) {
                        clearInterval(intl2)
                        resolve(3)
                    }
                }, 20);
                textArea.appendChild(gtg3)
            })
        }
        const a4 = async () => {
            return new Promise((resolve, reject) => {
                let gtg4 = document.createElement("div")
                gtg4.setAttribute("class", "gtg4")
                gtg4.innerHTML = ""
                let str4 = `Hacking Bank Account: Pan Number:ODSPK79***`
                let m = 0
                let intl3 = setInterval(() => {
                    gtg4.innerHTML += str4[m]
                    m += 1
                    if (m == str4.length) {
                        clearInterval(intl3)
                        resolve(4)
                    } 
                textArea.appendChild(gtg4)
                }, 20);
            })
        }
        const a5 = async () => {
            return new Promise((resolve, reject) => {
          
                let gtg5 = document.createElement("div")
                gtg5.setAttribute("class", "gtg5")
                gtg5.innerHTML = ""
                let str5 = `Email Id: jaspreetkaur71xxx@gmail.com
        hacking instagram...`
                let n = 0
                let intl4 = setInterval(() => {
                    gtg5.innerHTML += str5[n]
                    n += 1
                    if (n == str5.length) {
                        clearInterval(intl4)
                        resolve(5)
                    }
                }, 20);
                textArea.appendChild(gtg5)
            })
        }
        const a6 = async () => {
            return new Promise((resolve, reject) => {
          
                let gtg6 = document.createElement("div")
                gtg6.setAttribute("class", "gtg6")
                gtg6.innerHTML = ""
                let str6 = `0010110010101010101010110101000000101010010100010001010010100101111110100100101001010010010101010101000101001010110101000000101010010100010001010010100101111110100100101001010010010101010101000101001010110101000000101010010100010001010010100101111110100100101001010010010101010101000101001011001010101010101011010100000010`
                let o = 0
                let intl5 = setInterval(() => {
                    gtg6.innerHTML += str6[o]
                    o += 1
                    if (o == str6.length) {
                        clearInterval(intl5)
                        resolve(6)
                    }
                }, 20);
                textArea.appendChild(gtg6)
            })
        }
        let hackRunner = async()=>{
            let a11 = await a1()
            let a22 = await a2()
            let a33 = await a3()
            let a44 = await a4()
            let a55 = await a5()
            let a66 = await a6()
            let pAll = Promise.all([a11, a22, a33, a44, a55, a66])
            pAll.then((alert("Sorry from Google, Your system is hacked Call Police for help!")))
            pAll.then((alert("You were pranked XD")))
        }
        console.log(value)
         hackRunner()
    })
   
}
d()

