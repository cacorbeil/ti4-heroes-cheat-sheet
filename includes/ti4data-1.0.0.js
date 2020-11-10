class Race {
  constructor(id, htmlname, imgurl, agents, commander, hero, mech, promissories) {
    this.id = id;
    this.htmlname = htmlname;
    this.imgurl = imgurl;
    this.agents = agents; // array of entries
    this.commander = commander;
    this.hero = hero;
    this.mech = mech;
    this.promissories = promissories; // array of entries
  }
}

// data taken on November 10th 2020
var racesData = [];

// base races
racesData.push(new Race("arborec",
                        "The <b>Arborec</b>",
                        "Arborec",
                        ["ACTION: Exhaust this card and choose a player's non-fighter ship; that player may replace that ship with one from their reinforcements that costs up to 2 more than the replaced ship."],
                        "<i>UNLOCK: Have 12 ground forces on planets you control.</i><br />After another player activates a system that contains 1 or more of your units that have PRODUCTION: You may produce 1 unit in that system.",
                        "ACTION: Produce any number of units in any number of systems that contain 1 or more of your ground forces. Then purge this card.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE, PRODUCTION 2, and PLANETARY SHIELD} - DEPLOY: When you use would use your MITOSIS faction ability, you may replace 1 of your infantry with a mech from your reinforcements instead.",
                        ["<b>Ω</b> After another player moves ships into a system that contains 1 or more of your units: you may place 1 command token from that player's reinforcements in any non-home system. Then, return this card to the Arborec player."]));

racesData.push(new Race("creuss",
                        "The <b>Ghosts of Creuss</b>",
                        "Creuss",
                        ["After a player activates a system that contains a non-delta wormhole: You may exhaust this card; if you do, that system is adjacent to all other systems that contain a wormhole during this tactical action."],
                        "<i>UNLOCK: Have units in 3 systems that contain alpha or beta wormholes.</i><br />After your ships move: For each ship that has a capacity value and moved through 1 or more wormholes, you may place 1 fighter from your reinforcements with that ship if you have unused capacity in the active system.",
                        "ACTION: Swap the positions of any two systems that contain wormholes or your units, other than the Creuss system and the Wormhole Nexus. Then, purge this card.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE} - After any player activates a system, you may remove this unit from the game board to place or move a Creuss wormhole token into this system.",
                        ["At the start of your turn during the action phase: place or move a Creuss wormhole token into either a system that contains a planet you control or a non-home system that does not contain another player's ships. Then, return this card to the Creuss player."]));
                        
racesData.push(new Race("hacan",
                        "The Emirates of <b>Hacan</b>",
                        "Hacan",
                        ["During the action phase: You may exhaust this card to gain 2 commodities or replenish another player's commodities."],
                        "<i>UNLOCK: Have 10 trade goods.</i><br />When you cast votes, you may spend any number of trade goods. Cast 2 additional votes for each trade good spent.",
                        "When 1 or more of your units use PRODUCTION: You may reduce the cost of each of your units to 0 during this use of PRODUCTION. If you do, purge this card.",
                        "{Cost=2, Combat=6, has SUSTAIN DAMAGE} - This planet's planet card may be traded as part of a transaction. If you do, move all of your units from this planet to another planet you control.",
                        ["ACTION: Place this card face-up in your play area. While this card is in your play area, you may negotiate transactions with players who are not your neighbor. If you activate a system that contains 1 or more of the Hacan player's units, return this card to the Hacan player."]));
                        
racesData.push(new Race("jolnar",
                        "The Universities of <b>Jol-Nar</b>",
                        "JolNar",
                        ["When a player spends resources to research: You may exhaust this card to allow that player to remove any number of their infantry from the game board. For each unit removed, reduce the resources spent by 1."],
                        "<i>UNLOCK: Own 8 technologies.</i><br />After you roll dice for a unit ability: You may reroll any of those dice.",
                        "ACTION: For each non-unit upgrade technology you own, you may replace that technology with any technology of the same color from the deck. Then, purge this card.",
                        "{Cost=2, Combat=6; might have SUSTAIN DAMAGE} Your infantry on this planet are not affected by your FRAGILE faction ability.",
                        ["After the Jol-Nar player researches a technology that is not a faction technology: Gain that technology. Then, return this card to the Jol-Nar player."]));
                        
racesData.push(new Race("L1Z1X",
                        "The <b>L1Z1X</b> Mindnet",
                        "L1Z1X",
                        ["After a player activates a system: You may exhaust this card to allow that player to replace 1 of their infantry in the active system with 1 mech from their reinforcements."],
                        "<i>UNLOCK: Have 4 dreadnoughts on the game board</i><br />Units that have PLANETARY SHIELD do not prevent you from using BOMBARDMENT.",
                        "ACTION: Choose 1 system that does not contain other players' ships; you may move your flagship and any number of your dreadnoughts from other systems into the chosen system. Then, purge this card.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE, has BOMBARDMENT 8} While not participating in ground combat, this unit can use its bombardment ability as if it was a ship.",
                        ["<b>Ω</b> When you gain command tokens during the status phase: Gain 1 additional command token. Then, return this card to the L1Z1X player."]));
                        
racesData.push(new Race("letnev",
                        "The Barony of <b>Letnev</b>",
                        "Letnev",
                        ["At the start of a space combat round. Exhaust to select a ship in the active system. That ship rolls one additional die in this combat round."],
                        "<i>UNLOCK: Have 5 non-fighter ships in 1 system.</i><br />After 1 of your units uses SUSTAIN DAMAGE, gain 1 trade good.",
                        "ACTION: Place this card near the game board; the number of non-fighter ships you can have in systems is not limited by laws or by the number of command tokens in your fleet pool during this game round. At the end of that game round, purge this card.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE} DEPLOY: At the start of a round of ground combat, you may spend 2 resources to replace 1 of your infantry in that combat with 1 mech.",
                        ["<b>Ω</b> After you and your opponent roll dice during space combat: you may reroll all of your opponent's dice and you may reroll any number of your dice. Then, return this card to the Letnev player."]));
                        
racesData.push(new Race("mentak",
                        "The <b>Mentak</b> Coalition",
                        "Mentak",
                        ["After the PILLAGE faction ability is used against another player: You may exhaust this card; if you do, you and that player each draw 1 action card."],
                        "<i>UNLOCK: Have 4 cruisers on the game board.</i><br />After you win a space combat: You may force your opponent to give you 1 promissory notes from their hand.",
                        "At the start of a space combat that you are participating in: You may purge this card; if you do, for each other player's ship that is destroyed during this combat, place 1 ship of that type from your reinforcements in the active system.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE} Other players' ground forces on this planet cannot use SUSTAIN DAMAGE.",
                        ["ACTION: Place this card face-up in your play area. While this card is in your play area, the Mentak player cannot use their Pillage faction ability against you. If you activate a system that contains 1 or more of the Mentak player's units, return this card to the Mentak player."]));
                        
racesData.push(new Race("muaat",
                        "The Embers of <b>Muaat</b>",
                        "Muaat",
                        ["ACTION: Exhaust this card and choose a player. That player may produce up to two units that each have a cost of 4 or less in a system that contains one of their warsuns or their flagship."],
                        "<i>UNLOCK: Produce a war sun.</i><br />After you spend a token from your strategy pool: You may gain 1 trade good.",
                        "After you move a war sun into a non-home system other than Mecatol Rex: You may destroy all other players' units in that system and replace that system tile with the Muaat supernova tile. If you do, purge this card and each planet card that corresponds to the replaced system tile.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE} When you use your STAR FORGE faction ability in this system or an adjacent system, you may place 1 infantry from your reinforcements with this unit.",
                        ["ACTION: Remove 1 token from the Muaat player's fleet pool and return it to his reinforcements. Then, gain your war sun unit upgrade technology card. Then, return this card to the Muaat player."]));
                        
racesData.push(new Race("naalu",
                        "The <b>Naalu</b> Collective",
                        "Naalu",
                        ["After an agenda is revealed: You may exhaust this card to look at the top card of the agenda deck. Then, you may show taht card to 1 other player."],
                        "<i>UNLOCK: Have 12 fighter ships on the game board.</i><br />You may produce 1 additional fighter for their cost; these additional units do not count against your PRODUCTION limit.",
                        "ACTION: Each other player must give you a promissory note from their hand, if able. Then purge this card.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE} - During combat against an opponent who has at least 1 relic fragment, apply +2 to the results of this unit's combat rolls.",
                        ["At the end of the strategy phase: place this card face-up in your play area and place the Naalu '0' token on your strategy card; You are first in the initiative order. The Naalu player cannot use his TELEPATHIC faction ability during this game round. Return this card to the Naalu player at the end of the status phase."]));
                        
racesData.push(new Race("nekro",
                        "The <b>Nekro</b> Virus",
                        "Nekro",
                        ["During the action phase: You may exhaust this card to choose a player; that player may discard 1 action card or spend 1 command token from their command sheet to gain 2 trade goods."],
                        "<i>UNLOCK: Own 3 technologies.</i><br />A 'Valefar Assimilator' technology counts only if its X or Y token is on a technology. - After you gain a technology: You may draw 1 action card.",
                        "ACTION: Choose a planet that has a technology specialty in a system that contains your units. Destroy any other players' units on that planet. Gain trade goods equal to that planet's combined resource and influence values and gain one technology that matches the specialty of that planet. Then purge this card.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE} During a combat against a player who has an 'X' or 'Y' token on 1 or more of their technologies, apply +2 to the result of each of this unit's combat rolls.",
                        ["At the start of combat: Place this card face-up in your play area. While this card is in your play area, the Nekro player cannot use his TECHNOLOGICAL SINGULARITY faction ability against you. If you activate a system that contains 1 or more of the Nekro player's units, return this card to the Nekro player."]));
                        
racesData.push(new Race("saar",
                        "The Clan of <b>Saar</b>",
                        "Saar",
                        ["After a player activates a system: You may exhaust this card to increase the move value of 1 of that player's ships to match the move value of the ship on the game board that has the highest move value."],
                        "<i>UNLOCK: Have 3 space docks on the game board.</i><br />When you produce fighters or infantry: You may place each of those units at any of your space docks that are not blockaded.",
                        "ACTION: Choose 1 system that is adjacent to 1 of your space docks. Destroy all other players' infantry and fighters in that system. Then, purge this card.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE} DEPLOY: After you gain control of a planet, you may spend 1 trade good to place 1 mech on that planet.",
                        ["After you commit 1 or more units to land on a planet: remove all of the Saar player's ground forces from that planet and place them on a planet controlled by the Saar player. Then return this card to the Saar player."]));
                        
racesData.push(new Race("sardakk",
                        "The <b>Sardakk N'orr</b>",
                        "Sardakk",
                        ["At the end of a player's tactical action: You may exhaust this card; if you do, that player may place 2 infantry from their reinforcements on a planet they control in the active system."],
                        "<i>UNLOCK: Control 5 planets in non-home systems.</i><br />During the commit ground forces step, you can commit up to 1 ground force from each planet in the active sytem and each planet in adjacent systems that do not contains 1 of your command tokens.",
                        "After you move ships into the active system: You may skip directly to the 'Commit Ground Forces' step. If you do, after you commit ground forces to land on planets, purge this card and return each of your ships in the active system to your reinforcements.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE} After this unit uses its sustain damage ability during ground combat, it produces one hit against your opponents ground forces on this planet.",
                        ["At the start of an invasion combat: apply +1 to the result of each of your unit's combat rolls during this combat.  If your opponent is the N'orr player, apply -1 to the result of each of his unit's combat rolls during this combat. Then, return this card to the N'orr player."]));
                        
racesData.push(new Race("sol",
                        "The Federation of <b>Sol</b>",
                        "Sol",
                        ["At the start of a ground combat round: You may exhaust this card to choose 1 ground force in the active system; that ground force rolls 1 additional die during this combat round."],
                        "<i>UNLOCK: Control planets with a combined total of at least 12 resources.</i><br />At the start of a ground combat on a planet you control: You may place 1 infantry from your reinforcements on that planet.",
                        "ACTION: Remove each of your command tokens from the game board and return them to your reinforcements. Then, purge this card.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE} DEPLOY: After you use your ORBITAL DROP faction ability, you may spend 3 resources to place 1 mech on that planet.",
                        ["At the start of the Sol player's turn: remove 1 token from the Sol player's strategy pool, if able, and return it to his reinforcements. Then, you may place 2 infantry from your reinforcements on any planet you control. Then return this card to the Sol player."]));
                        
racesData.push(new Race("winnu",
                        "The <b>Winnu</b>",
                        "Winnu",
                        ["When 1 or more of a player's units use PRODUCTION: You may exhaust this card to reduce the combined cost of the produced units by 2."],
                        "<i>UNLOCK: Control Mecatol Rex or enter into a combat in the Mecatol Rex system.</i><br />During combat: Apply +2 to the result of each of your unit's combat rolls in the Mecatol Rex system, your home system, and each system that contains a legendary planet.",
                        "ACTION: Perform the primary ability of any strategy card. Then, choose any number of other players. Those players may perform the secondary ability of that strategy card. Then, purge this card.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE} After you resolve a tactical action where you gained control of this planet, you may place 1 PDS or 1 Space Dock from your reinforcements on this planet.",
                        ["<b>Ω</b> When the Winnu player resolves a strategic action: you do not have to spend or place a command token to resolve the secondary ability of that strategy card. Then, return this card to the Winnu player."]));
                        
racesData.push(new Race("xxcha",
                        "The <b>Xxcha</b> Kingdom",
                        "Xxcha",
                        ["ACTION: Exhaust this card to ready any planet; if that planet is in a system that is adjacent to a planet you control, you may remove 1 infantry from that planet and return it to its reinforcements."],
                        "<i>UNLOCK: Control planets that have a combined total of at least 12 influence.</i><br />Each planet that you exhaust to cast votes provides 1 additional vote. Game effects cannot prevent you from voting.",
                        "ACTION: You may discard 1 law from play. Look at the top 5 cards of the agenda deck. Choose 2 to reveal, and resolve each as if you had cast 1 vote for an outcome of your choice; discard the other 3. Then, purge this card.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE and SPACE CANNON 8} You may use this unit's SPACE CANNON against ships that are in adjacent systems.",
                        ["When an agenda is revealed: remove 1 token from the Xxcha player's strategy pool and return it to his reinforcements. Then, discard the revealed agenda and reveal 1 agenda from the top of the deck. Players vote on this agenda instead. Then, return this card to the Xxcha player."]));
                        
racesData.push(new Race("yin",
                        "The <b>Yin</b> Brotherhood",
                        "Yin",
                        ["After a player's destroyer or cruiser is destroyed you may exhaust this card. If you do, that player may place up to 2 fighters from their reinforcements in that unit's system."],
                        "<i>UNLOCK: Use your Indoctrination faction ability.</i><br />This card satisfies a green technology prerequisite. You may produce 1 additional infantry for their cost; these additional infantry do not count against your PRODUCTION limit.",
                        "ACTION: For each planet that contains any number of your infantry, either ready that planet or place an equal number of infantry from your reinforcements on that planet. Then, purge this card.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE} DEPLOY: When you use your INDOCTRINATION faction ability, you may spend 1 additional influence to replace your opponent's unit with 1 mech instead of 1 infantry.",
                        ["<b>Ω</b> At the start of a ground combat against 2 or more ground forces that are not controlled by the Yin player: replace 1 of your opponent's infantry with 1 infantry from your reinforcements. Then, return this card to the Yin player."]));
                        
racesData.push(new Race("yssaril",
                        "The <b>Yssaril</b> Tribes",
                        "Yssaril",
                        ["This card has the text ability of each other player's agent, even if that agent is exhausted."],
                        "<i>UNLOCK: have 7 action cards.</i><br />After another player activates a system that contains your units, you may look at that player's action cards, promissory notes, or secret objectives.",
                        "ACTION: Each other player shows you 1 action card from their hand. For each player, you may either take that card or force that player to discard 3 random action cards from their hand. Then, purge this card.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE} DEPLOY: After you use your STALL TACTICS faction ability, you may place 1 mech on a planet you control.",
                        ["At the start of your turn: look at the Yssaril player's hand of action cards. Choose 1 of those cards and add it to your hand. Then, return this card to the Yssaril player."]));
                        
// expansion races
racesData.push(new Race("mahact",
                        "The <b>Mahact</b> Gene-Sorcerers",
                        "Mahact",
                        ["When you would spend a command token during the secondary ability of a strategic action: You may exhaust this card to remove 1 of the active player's command tokens from the board and use it instead."],
                        "<i>UNLOCK: Have 2 other factions' command tokens in your fleet pool.</i><br />During your tactical actions, you can activate systems that contain your command tokens. If you do, return both command tokens to your reinforcements and end your turn.",
                        "ACTION: Move all units in the space area of any system to an adjacent system that contains a different player's ships. Space combat is resolved in that system; neither player can retreat or resolve abilities that would move their ships. Then, purge this card.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE} After a player whose command token is in your fleet pool activates this system, you may spend their token from your fleet pool to end their turn; they gain that token.",
                        ["At the start of the strategy phase: Choose 1 non-home system that contains your units; each other player who has a token on the Mahact player's command sheet places a token from their reinforcements in that system. Then, return this card to the Mahact player."]));
                        
racesData.push(new Race("naaz-rokha",
                        "The <b>Naaz-Rokha</b> Alliance",
                        "NaazRokha",
                        ["At the end of a player's turn: You may exhaust this card to allow that player to explore 1 of their planets."],
                        "<i>UNLOCK: Have 3 mechs in 3 systems.</i><br />After you gain control of a planet that was controlled by another player: You may explore that planet.",
                        "ACTION: Gain 1 relic and perform the secondary ability of up to 2 readied or unchosen strategy cards; during this action, spend command tokens from your reinforcements instead of your strategy pool. Then, purge this card.",
                        "{Cost=2, Combat=6(x2); has SUSTAIN DAMAGE} If this unit is in the space area of the active system at the start of a space combat, flip this card.<br />{Cost=2, Combat=8(x2)} If this unit is in the space area of the active system, it is also a ship. At the end of a space battle in the active system, flip this card.",
                        ["ACTION: Purge 2 of your relic fragments of the same type to gain 1 relic. Then return this card to the Naaz-Rokha player."]));
                        
racesData.push(new Race("titans",
                        "The <b>Titans</b> of UI",
                        "Titans",
                        ["When a hit is produced against a unit: You may exhaust this card to cancel that hit."],
                        "<i>UNLOCK: Have 5 structures on the game board.</i><br />When 1 or more of your units use PRODUCTION: You may gain 1 trade good.",
                        "ACTION: Ready Elysium and attach this card to it. Its resource and influence values are each increased by 3, and it gains the SPACE CANNON 5(x3) ability as if it were a unit.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE} - DEPLOY: When you would place a PDS on a planet, you may place 1 mech and 1 infantry on that planet instead.",
                        ["ACTION: Attach this card to a non-home planet you control other than Mecatol Rex. Its resource and influence values are each increased by 1, and it is treated as having all 3 planet traits (cultural, hazardous, and industrial)."]));
                        
racesData.push(new Race("nomad",
                        "The <b>Nomad</b>",
                        "Nomad",
                        ["When you gain trade goods from the supply: You may exhaust this card to place an equal number of trade goods on this card. When this card readies, gain the trade goods on this card.",
                        "At the end of a player's turn: You may exhaust this card to allow that player to remove up to 2 of their ground forces from the game board and place them on planets they control in the active system.",
                        "After the 'Roll Dice' step of combat: You may exhaust this card. If you do, hits are not assigned to either players' units. Return to the start of this combat round's 'Roll Dice' step."],
                        "<i>UNLOCK: Have 1 scored secret objective.</i><br />You can produce your Flagship without spending resources.",
                        "ACTION: Place this card near the game board; your flagship and units it transports can move out of systems that contain your command tokens during this game round. At the end of that game round, purge this card.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE} - While this unit is in a space area, you may use its SUSTAIN DAMAGE ability to cancel a hit that is produced against your ships in this system.",
                        ["At the start of a space combat against a player other than the Nomad: during this combat, treat 1 of your non-fighter ships as if it has the SUSTAIN DAMAGE ability, combat value, and ANTI-FIGHTER BARRAGE value of the Nomad's flagship. Return this card to the Nomad player at the end of this combat."]));
                        
racesData.push(new Race("empyrean",
                        "The <b>Empyrean</b>",
                        "Empyrean",
                        ["After a player moves ships into a system that does not contain any planets: You may exhaust this card; that player gains 1 command token."],
                        "<i>UNLOCK: Be neighbors with all other players.</i><br />After another player moves ships into a system that contains 1 of your command tokens: You may return that token to your reinforcements.",
                        "ACTION: Place 1 frontier token in each system that does not contain any planets and does not already have a frontier token. Then, explore each frontier token that is in a system that contains 1 or more of your ships. Then, purge this card.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE} - You may remove this unit from a system that contains or is adjacent to another player's unit to cancel an action card played by that player.",
                        ["DARK PACT - ACTION: Place this card faceup in your play area. When you give a number of commodities to the Empyrean player equal to your maximum commodity value, you each gain 1 trade good. If you activate a system that contains 1 or more of the Empyrean player's units, return this card to the Empyrean player.",
                        "BLOOD PACT - ACTION: Place this card faceup in your play area. When you and the Empyrean player cast votes for the same outcome, cast 4 additional votes for that outcome. If you activate a system that contains 1 or more of the Empyrean player's units, return this card to the Empyrean player."]));
                        
racesData.push(new Race("cabal",
                        "The Vuil'raith <b>Cabal</b>",
                        "Cabal",
                        ["After another player replenishes commodities, you may exhaust this card to convert their commodities to trade goods and capture one unit from their reinforcements that has a cost equal to or lower than their commodity value."],
                        "<i>UNLOCK: Have units in 3 gravity rifts.</i><br />When you produce fighter or infantry units: Up to 2 of those units to not count against your PRODUCTION limit.",
                        "ACTION: Each other player rolls a die for each of his non-fighter ships that are in or adjacent to a system that contains a dimensional tear; on a 1-3, capture that unit. If this causes a player's ground forces or fighters to be removed, also capture those units. Then, purge this card.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE} - When your infantry on this planet are destroyed, place them on your faction sheet; those units are captured.",
                        ["After you activate a system: Your ships do not roll for gravity rifts during this movement; apply an additional +1 to the move values of your ships that would move out of or through a gravity rift instead. Then, return this card to the Vuil'raith player."]));
                        
racesData.push(new Race("argent",
                        "The <b>Argent</b> Flight",
                        "Argent",
                        ["When a player produces ground forces in a system: You may exhaust this card; that player may place those units on any planets they control in that system and any adjacent systems."],
                        "<i>UNLOCK: Have 6 units that have ANTI-FIGHTER BARRAGE, SPACE CANNON, or BOMBARDMENT on the game board.</i><br />When 1 or more of your units make a roll for a unit ability: You may choose 1 of those units to roll 1 additional die.",
                        "ACTION: Move any number of your ships from any systems to any number of other systems that contain 1 of your command tokens and no other players' ships. Then, purge this card.",
                        "{Cost=2, Combat=6; has SUSTAIN DAMAGE} This unit does not count against capacity if it is being transported, or if it is in a space area with 1 or more of your ships that has capacity values.",
                        ["When 1 or more of your units make a roll for a unit ability: Choose 1 of those units to roll 1 additional die. Then, return this card to the Argent player."]));

