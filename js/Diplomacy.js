var DiplmacyGE ={
    mPlayers:[],
    mTerritorys:[],
    init:function() {
        
    },
    getPlayer:function(name) {
        for(var i in this.mPlayers) {
            if (this.mPlayers[i].mName == name) {
                return this.mPlayers[i];
            }
        }
        return false;
    },
    addPlayer:function(name) {
        var player = new Player(name);
        this.mPlayers[player.getClassName()] = player;
    }
}

function Player(name) {
    this.mName = name;
    this.mTerritorys = [];
    this.addTerritory = function(territory) {
        this.mTerritorys[territory.getClassName()] = territory;
        territory.setRuler(this);
    },
    this.getClassName=function() {
        var className = this.mName + "";
        className = className.replace(/ /g,"_");
        return className;
    }
}

function Territory(name) {
    this.mName = name;
    this.mNeighbors = [];
    this.mUnitCount=0;
    this.mPlayer;
    this.mRendered = false;
    this.addNeighbor=function(neighbor) {
        console.log(this.mName + " Neighbor: " + neighbor.mName);
        //console.log(this.mNeighbors[neighbor.mName]);
        if (this.mNeighbors[neighbor.mName] == undefined) {
            
            this.mNeighbors[neighbor.mName] = neighbor;
            console.log(this.mNeighbors[neighbor.mName]);
            neighbor.addNeighbor(this);
        }
        return this;
    }
    this.setRuler=function(player) {
        this.mPlayer = player;
    }
    this.getClassName=function() {
        var className = this.mName + "";
        className = className.replace(/ /g,"_");
        return className;
    }
}
function Continent(name,units) {
    this.mName = name;
    this.UNIT_BONUS= units;
    this.mTerritorys = [];
    this.addTerritory = function(Territory) {
        this.mTerritorys[Territory.mName] = Territory;
    }
}
var World = {
    NorthAmerica:new Continent("North America",5),
    Alaska:new Territory("Alaska"),
    NorthwestTerritory:new Territory("Northwest Territory"),
    Alberta:new Territory("Alberta"),
    WesternUnitedStates:new Territory("Western United States"),
    Ontario:new Territory("Ontario"),
    EasternUnitedStates:new Territory("Eastern United States"),
    Greenland:new Territory("Greenland"),
    Quebec:new Territory("Quebec"),
    CentralAmerica:new Territory("Central America"),
    
    SouthAmerica:new Continent("South America",2),
    Venezuela:new Territory("Venezuela"),
    Peru:new Territory("Peru"),
    Argentina:new Territory("Argentina"),
    Brazil:new Territory("Brazil"),
    
    Europe:new Continent("Europe",5),
    Iceland:new Territory("Iceland"),
    GreatBritain:new Territory("Great Britain"),
    WesternEurope:new Territory("Western Europe"),
    Scandanavia:new Territory("Scandanavia"),
    NorthernEurope:new Territory("Northern Europe"),
    SouthernEurope:new Territory("Southern Europe"),
    Ukraine:new Territory("Ukraine"),
    
    Africa:new Continent("Africa",3),
    NorthAfrica:new Territory("North Africa"),
    Congo:new Territory("Congo"),
    SouthAfrica:new Territory("South Africa"),
    Egypt:new Territory("Egypt"),
    EastAfrica:new Territory("East Africa"),
    Madagascar:new Territory("Madagascar"),
    
    Asia:new Continent("Asia",7),
    Ural:new Territory("Ural"),
    Afghanistan:new Territory("Afghanistan"),
    MiddleEast:new Territory("Middle East"),
    Siberia:new Territory("Siberia"),
    China:new Territory("China"),
    India:new Territory("India"),
    Yakutsk:new Territory("Yakutsk"),
    Irkutsk:new Territory("Irkutsk"),
    Mongolia:new Territory("Mongolia"),
    Siam:new Territory("Siam"),
    Kamchatka:new Territory("Kamchatka"),
    Japan:new Territory("Japan"),
    
    Oceana:new Continent("Oceana",2),
    Indonesia:new Territory("Indonesia"),
    WesternAustralia:new Territory("Western Australia"),
    NewGuinea:new Territory("New Guinea"),
    EasternAustralia:new Territory("Eastern Australia"),
    init:function() {
        this.NorthAmerica.addTerritory(this.Alaska);
        this.NorthAmerica.addTerritory(this.Alberta);
        this.NorthAmerica.addTerritory(this.WesternUnitedStates);
        this.NorthAmerica.addTerritory(this.CentralAmerica);
        this.NorthAmerica.addTerritory(this.NorthwestTerritory);
        this.NorthAmerica.addTerritory(this.Ontario);
        this.NorthAmerica.addTerritory(this.EasternUnitedStates);
        this.NorthAmerica.addTerritory(this.Quebec);
        this.NorthAmerica.addTerritory(this.Greenland);
        
        this.SouthAmerica.addTerritory(this.Venezuela);
        this.SouthAmerica.addTerritory(this.Peru);
        this.SouthAmerica.addTerritory(this.Argentina);
        this.SouthAmerica.addTerritory(this.Brazil);
        
        this.Europe.addTerritory(this.Iceland);
        this.Europe.addTerritory(this.GreatBritain);
        this.Europe.addTerritory(this.WesternEurope);
        this.Europe.addTerritory(this.Scandanavia);
        this.Europe.addTerritory(this.NorthernEurope);
        this.Europe.addTerritory(this.SouthernEurope);
        this.Europe.addTerritory(this.Ukraine);
        
        this.Africa.addTerritory(this.NorthAfrica);
        this.Africa.addTerritory(this.Congo);
        this.Africa.addTerritory(this.SouthAfrica);
        this.Africa.addTerritory(this.Egypt);
        this.Africa.addTerritory(this.EastAfrica);
        this.Africa.addTerritory(this.Madagascar);
        
        this.Asia.addTerritory(this.Ural);
        this.Asia.addTerritory(this.Afghanistan);
        this.Asia.addTerritory(this.MiddleEast);
        this.Asia.addTerritory(this.Siberia);
        this.Asia.addTerritory(this.China);
        this.Asia.addTerritory(this.India);
        this.Asia.addTerritory(this.Yakutsk);
        this.Asia.addTerritory(this.Irkutsk);
        this.Asia.addTerritory(this.Mongolia);
        this.Asia.addTerritory(this.Siam);
        this.Asia.addTerritory(this.Kamchatka);
        this.Asia.addTerritory(this.Japan);
        
        this.Oceana.addTerritory(this.Indonesia);
        this.Oceana.addTerritory(this.NewGuinea);
        this.Oceana.addTerritory(this.WesternAustralia);
        this.Oceana.addTerritory(this.EasternAustralia);
        
        this.Alaska
        .addNeighbor(this.NorthwestTerritory)
        .addNeighbor(this.Yakutsk)
        .addNeighbor(this.Alberta);
        
        this.NorthwestTerritory
        .addNeighbor(this.Greenland)
        .addNeighbor(this.Alberta)
        .addNeighbor(this.Ontario);
        
        this.Greenland
        .addNeighbor(this.Iceland)
        .addNeighbor(this.Ontario)
        .addNeighbor(this.Quebec);
        
        this.Alberta
        .addNeighbor(this.Ontario)
        .addNeighbor(this.WesternUnitedStates);
        
        this.Ontario
        .addNeighbor(this.Quebec)
        .addNeighbor(this.EasternUnitedStates)
        .addNeighbor(this.WesternUnitedStates);
            
        this.WesternUnitedStates
        .addNeighbor(this.EasternUnitedStates)
        .addNeighbor(this.CentralAmerica);
        
        this.EasternUnitedStates
        .addNeighbor(this.CentralAmerica);
        
        this.CentralAmerica
        .addNeighbor(this.Venezuela);
        
        this.Venezuela
        .addNeighbor(this.Brazil)
        .addNeighbor(this.Peru);
        
        this.Peru
        .addNeighbor(this.Argentina)
        .addNeighbor(this.Brazil);
        
        this.Brazil
        .addNeighbor(this.NorthAfrica);
        
        this.NorthAfrica
        .addNeighbor(this.WesternEurope)
        .addNeighbor(this.SouthernEurope)
        .addNeighbor(this.Egypt)
        .addNeighbor(this.EastAfrica)
        .addNeighbor(this.Congo);
        
        this.Congo
        .addNeighbor(this.SouthAfrica)
        .addNeighbor(this.EastAfrica);
        
        this.SouthAfrica
        .addNeighbor(this.Madagascar)
        .addNeighbor(this.EastAfrica);
        
        this.Madagascar
        .addNeighbor(this.EastAfrica);
        
        this.EastAfrica
        .addNeighbor(this.MiddleEast)
        .addNeighbor(this.Egypt);
        
        this.Egypt
        .addNeighbor(this.MiddleEast)
        .addNeighbor(this.SouthernEurope);
            
        this.SouthernEurope
        .addNeighbor(this.MiddleEast)
        .addNeighbor(this.Ukraine)
        .addNeighbor(this.NorthernEurope)
        .addNeighbor(this.WesternEurope);
        
        this.WesternEurope
        .addNeighbor(this.NorthernEurope)
        .addNeighbor(this.GreatBritain);
        
        this.GreatBritain
        .addNeighbor(this.Iceland)
        .addNeighbor(this.Scandanavia);
        
        this.Iceland
        .addNeighbor(this.Scandanavia);
        
        this.Scandanavia
        .addNeighbor(this.Ukraine)
        .addNeighbor(this.NorthernEurope);
            
        this.Ukraine
        .addNeighbor(this.NorthernEurope)
        .addNeighbor(this.Ural)
        .addNeighbor(this.Afghanistan)
        .addNeighbor(this.MiddleEast);
        
        this.MiddleEast
        .addNeighbor(this.India)
        .addNeighbor(this.Afghanistan);
        
        this.India
        .addNeighbor(this.Siam)
        .addNeighbor(this.China)
        .addNeighbor(this.Afghanistan);
        
        this.Afghanistan
        .addNeighbor(this.China)
        .addNeighbor(this.Ural);
            
        this.Ural
        .addNeighbor(this.China)
        .addNeighbor(this.Siberia);
            
        this.Siberia
        .addNeighbor(this.China)
        .addNeighbor(this.Mongolia)
        .addNeighbor(this.Irkutsk)
        .addNeighbor(this.Yakutsk);
        
        this.Yakutsk
        .addNeighbor(this.Irkutsk)
        .addNeighbor(this.Kamchatka);
            
        this.Kamchatka
        .addNeighbor(this.Irkutsk)
        .addNeighbor(this.Japan)
        .addNeighbor(this.Mongolia);
        
        this.Mongolia
        .addNeighbor(this.Irkutsk)
        .addNeighbor(this.Japan)
        .addNeighbor(this.China);
        
        this.China
        .addNeighbor(this.Siam);
            
        this.Siam
        .addNeighbor(this.Indonesia);
        
        this.Indonesia
        .addNeighbor(this.WesternAustralia)
        .addNeighbor(this.NewGuinea);
        
        this.NewGuinea
        .addNeighbor(this.EasternAustralia)
        .addNeighbor(this.WesternAustralia);
        
        this.EasternAustralia
        .addNeighbor(this.WesternAustralia);
    }
    
}

var UX = {
    jMap:null,
    jTerritoryTemplate:null,
    displayArray:new Array(),
    init:function() {
        this.jTerritoryTemplate = $("div#territory_template");
        this.jMap = $("div#gameboard");
        this.aDialog.init("div.dialog_container");
        this.renderTerritory(World.Alaska);
        var locations = $("div.location");
        locations.each(function(index,element) {
            var jObject = $(element);
            jObject.click(function() {
                var jObject = $(this);
                
                $("div.location").css("background-color","grey").css("position","static").css("margin-top","0px").css("margin-left","0px").css("float","none");
                
                $("div."+jObject.attr("id")).not(jObject).css("background-color","white").css("position","fixed")
                .each(function(index,element) {
                    var jObject = $(this);
                    switch(index) {
                        case 0:
                            //Upper left
                            jObject.css("top","50%").
                            css("left","50%").
                            css("margin-top","-225px").
                            css("margin-left","-150px");
                            break;
                        case 1:
                            //Upper right
                            jObject.css("top","50%").
                            css("left","50%").
                            css("margin-top","-225px").
                            css("margin-left","0px");
                            break;
                        case 2:
                            //Left side
                            jObject.css("top","50%").
                            css("left","50%").
                            css("margin-top","-75px").
                            css("margin-left","-225px");
                            break;
                        case 3:
                            //Right side
                            jObject.css("top","50%").
                            css("left","50%").
                            css("margin-top","-75px").
                            css("margin-left","75px");
                            break;
                        case 4:
                            //Bottom left
                            jObject.css("top","50%").
                            css("left","50%").
                            css("margin-top","75px").
                            css("margin-left","-150px");
                            break;
                        case 5:
                            //Bottom right
                            jObject.css("top","50%").
                            css("left","50%").
                            css("margin-top","75px").
                            css("margin-left","0px");
                            break;
                        default:
                            jObject.css("background-color","red");
                    }
                });
                
                
                jObject.css("background-color","yellow").
                css("position","fixed").
                css("top","50%").
                css("left","50%").
                css("margin-top","-75px").
                css("margin-left","-75px");
                
                
            });
        });
        $(locations.find("h3")).click(function(){
            UX.showCreateNewPlayer();
            return false;
        });
        
        UX.FINISH();
    },
    renderTerritory:function(territory) {
        var className = territory.getClassName();
        
        var placedTerritory = $("div#"+className);
        if (territory.mRendered) {
            //Do not render it
            return;
        }
        
        console.log("Territory name: " + className);
        var jTerritory = this.jTerritoryTemplate.clone();
        jTerritory.attr("id",className);
        var jTitle = $(jTerritory).find("h2");
        jTitle.html(territory.mName);
        jTerritory.addClass(className);
        
        
        $(this.jMap).append(jTerritory);
        territory.mRendered = true;
        this.displayArray.push(className);
        for (var i in territory.mNeighbors) {
            jTerritory.addClass(territory.mNeighbors[i].getClassName());
            this.renderTerritory(territory.mNeighbors[i]);
        }
    },
    FINISH:function() {
        var className = UX.displayArray.pop();
        if (className !== undefined) {
            $("div#"+className).animate({
                width:150,
                height:150
            }, 100, "linear", UX.FINISH);
        }
    },
    aDialog:{
        jBox:null,
        jTitle:null,
        jMessage:null,
        jButton:null,
        jClose:null,
        jUnderlay:null,
        init:function(dialogBoxSelector) {
            this.jBox = $(dialogBoxSelector);
            this.jTitle = this.jBox.find(".dialog_title");
            this.jMessage = this.jBox.find(".dialog_message");
            this.jButton = this.jBox.find("#dialog_button_1");
            this.jClose = this.jBox.find("#dialog_close");
            this.jUnderlay = $(".underlay");
        },
        setTitle:function(text) {
            this.jTitle.html(text);
        },
        setMessage:function(text) {
            this.jMessage.html(text);
        },
        setButtonText:function(text) {
            this.jButton.val(text);
        },
        setButtonAction:function(clickFunction) {
            var self = this;
            this.jButton.click(clickFunction).click(function(){
                self.closeDialog()
            });
        },
        clearButtonAction:function() {
            this.jButton.unbind("click");
        },
        reset:function() {
            this.setTitle("Dialog Title");
            this.setMessage("Dialog Message");
            this.setButtonText("Button 1");
            this.clearButtonAction();
            
        },
        showUnderlay:function() {
            this.jUnderlay.show("fast");
        },
        clearUnderlay:function() {
            this.jUnderlay.hide("fast");
        },
        showDialog:function() {
            this.showUnderlay();
            this.jBox.show("fast");
        },
        closeDialog:function() {
            this.jBox.hide("fast");
            this.reset();
            this.clearUnderlay();
        }
    },
    //Modal Dialogs
    showDialog:function(title,message,buttonText,buttonAction) {
        //this.jInput.prop("disabled",true);
        this.aDialog.setTitle(title);
        this.aDialog.setMessage(message);
        this.aDialog.setButtonText(buttonText);
        this.aDialog.setButtonAction(buttonAction);
        this.aDialog.showDialog();
    },
    showCreateNewPlayer:function() {
        var title = "Create New Player";
        var message = "Enter Your Name";
        var buttonText = "New Player";
        var buttonAction = function() {
            //EventHandler.fireGameReset();
        }
        this.showDialog(title, message, buttonText, buttonAction);
    }
}

$(document).ready(function() {
    World.init();
    UX.init();
})