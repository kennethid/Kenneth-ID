///let button bot
let btn = [{
                                urlButton: {
                                    displayText: 'YouTube 🍒',
                                    url: `${websitex}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'List Menu 🍢',
                                    id: 'command'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner 🤣',
                                    id: 'owner'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        XeonBotInc.send5ButImg(m.chat, menulist, global.botname, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        XeonBotInc.send5ButGif(m.chat, menulist, global.botname, global.vidmenu, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        XeonBotInc.send5ButVid(m.chat, anu, global.botname, global.vidmenu, btn, global.thumb)
                        } else if (setbot.templateVideo) {
                        XeonBotInc.send5ButVid(m.chat, menulist, global.botname, global.vidmenu, btn, global.thumb)
                        /////////} else if (setbot.templateMsg) {
                        /////////XeonBotInc.send5ButMsg(m.chat, menulist, global.botname, btn)
                        } else if (setbot.templateDocument) {
                        let buttonmenu = [
        	{ urlButton: { displayText: `YouTube 🍒`, url : `${websitex}` } },
            { quickReplyButton: { displayText: `List Menu 🍢`, id: 'command'} },
            { quickReplyButton: { displayText: `Owner 🤣`, id: 'owner'} }
        	]
        	XeonBotInc.sendMessage(m.chat, { caption: menulist, document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), mimetype: `${docs}`, fileName: `${ownername}`, templateButtons: buttonmenu, footer: `${botname}`, mentionedJid: [m.sender] })
                        }
                     }