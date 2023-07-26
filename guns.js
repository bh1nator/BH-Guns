const Guns = [
{
    //gun apperance settings
    toolName : "Pistol", //the name that players will see
    ByTeams : false, //if true then bullets will not damage players from the same team as the shooter, if false then its free for all.
    gunModel : 11844, //11844 6929
    gunAsOrigin : true, //[only supports tool models: Laser Gun (gunModel:11844), Rocket Launcher (gunModel:6929)] the bullets will originate (be created) in the gun (that the player is holding) position, if set to false the bullets will originate from the players chest and look like they come out of the center of the camera in first person mode
    
    //gun use settings
    cooldown : 500, //in milliseconds, the amount of time players have to wait between shots
    cartridge : false, //if set to a number bigger than 0, the gun will use a reloading system and this number will be the amount of bullets players have after reloading
    reloadingTime : false, //in milliseconds. if the reloading system is on, this is the amount of time a player has to wait while refilling his gun
    limitedAmmo : false, //if set to true then the players will have a limited amount of bullets, this is for developers as they have to give the player a beginning amount of ammo and a way to refill like ammoboxes around the map
    uses : false, //irrelevant to 99%. if this is set to a number above 0 then the gun will disappear after the specified amount of uses, useful for developers who want to create projectiles like throwable rocks
    toggleShooting: false, //NOTE: this only works well without raycast aiming. | if true, clicking will cause the gun to start/stop shooting automatically instead of just shooting once, the cooldown is used as the interval of the bullets being created.

    //shooting settings
    damage : 30, //per shot
    speed : 50, //1D studs per second, original crimson gun had about 66
    updateRate : 30, //the amount of time between bullet teleportations, in milliseconds. gunSettings will determine how smooth the movements will look (higher numbers will look laggy)
    travelDistance : 200, //the distance the brick will travel before being destroyed. generally youd just want to set this to a very high number and set the world boundaries variable in the advanced settings below to the size of your map
    bulletGravity: false, //studs per seconds squared

    //bullet apperance settings:
    color : "#FFAA00", //the color of a bullet. there are more advanced options: change to "team" to make the bullet color the color of the team the player who shot it is in, change to "random" to make the color of each bullet random
    bulletSize : 1, //the length of a side of a cube in 1D studs
    visibility : 1, // the transparency

    //bullet effects settings
    noProjectile : false, //if true then there wont be a brick created to represent the bullet and the bullet wont have any travel time, the whole calculation will be done at once and whatever hit will be hit instantly when the player took the shot.
    shotPathBrick : false, //NOTE: this feature requires a recent version of the client by MixaMega. | if true then a long and thin brick will be created from the shooting position to the hit position and quickly disappear, the brick is an effect only and doesn't effect anything. it uses the bullet settings for its aesthetics

    //player hit settings
    penetration: true, //if true, bullets wont get destroyed after hitting a player
    ignoreTeammates: false, //if true and ByTeams is true and penetration is false, bullets wont get destroyed after touching a teammate, (if false bullets will get destroyed but teammates wont take any damage)
    hitBots: false,

    //aiming settings:
    firstPersonLock : false, // if true, the player will be locked in first person when equipping the gun and returned to normal vision when unequipping it, it is a good option as aiming is much better in first person mode, especially without raycast aiming, thats why most real shooters are FPS games.
    threeDimensional : true, //if true, the gun will aim where the player is looking in the 3D space, if false, the gun will aim where the player is looking horizontally (parallel to the ground)
    directionShake : false, //in degrees, the aimed direction will be modifier by a random angle in this range (up to half of this number to each direction), in both the horizontal and vertical directions
    verticalAngleOffset : false, //in degrees, the aimed direction will be changed by this amount (up-down)
    horizontalAngleOffset : false, //in degrees, the aimed direction will be changed by this amount (left-right)
    //ray cast aiming settings:
    rayCastingAim : true, //if true, the direction of the shot will be where the player clicked on the map, if false, the direction of the shot will be determined by his character and camera rotation, in a way that the direction of the shot will also be the center of the screen when in first person mode
    rayCastingDistanceHorizontal : 200, //creates a cage of invisible bricks that surround and follow the player and intercept far raycasts. in case you already have invisible walls surrounding your map and it isn't too big you should set this to false. this feature is important because raycast aiming doesn't work correctly if you click on somewhere without a brick (the sky).
    rayCastingDistanceVertical : 80, //if you set these distances too high then rays wont reach them and miss anyway and if you set them to too low the you wont be able to shoot far, i found 200 for horizontal and 80 for vertical to be great

    //map collision settings:
    wallsBlock : true, //if false then bullet will go through walls and if true bullet will get destroyed upon touching another brick, this is pretty optimised
    onlyCollidables : true, // only relevant if you set wallsBlock, if gunSettings is true then the bullets wont be destroyed by touching uncollidable bricks and if false the bullets will be destroyed by uncollidable bricks aswell
    
    //death animation settings:
    deathAnimation : fallOver, //the animation to be player when a player is shot with the gun, the existing options are: fallForward in which your body is replaced with bricks with physics that fall forward, fallBackward which is like fallForward but backward, deathani which is the original crimson gun one by smartlion. if you want no death animation you can just set to false or delete gunSettings line
    deathAnimationParameters: [4, 1, false], //[parameter1, parameter2, ...] the parameters to be given to the death animation. more info about the parameters of each death animation in the info paragraph below

    //wall splatter settings:
    wallSplatterColor: "wall", // the color of the splatter when hitting a wall, set to false or delete line to disable wall splatter, special options are "wall" which uses the wall color and also uses the walls transparency, "bullet" which uses the bullet color, and "random".
    wallSplatterSize: 0.25, //the size of the sides of the cubes in studs
    wallSplatterAmount: 3, // how many bricks will splatter
    wallSplatterSpeed: 6, // studs per second
    wallSplatterTime: 0.25, //seconds until bricks disappear, should be very low
    wallSplatterUpdateRate: 100, //the amount of time between position changes, in milliseconds. once again only changes how smooth it will look
    wallSplatterInGround: true, //create a splatter if the bullet hits the ground

    //player splatter (blood) settings
    playerSplatterColor: "FF0000", // the color of the splatter when hitting a player, set to false or delete line to disable player splatter, special options are "bullet", "random", and each of the players body parts (e.g. "head", "rightLeg"). normally you would set gunSettings to red for blood.
    playerSplatterSize: 0.25, //the size of the sides of the cubes in studs
    playerSplatterAmount: 3, // how many bricks will splatter
    playerSplatterSpeed: 6, // studs per second
    playerSplatterTime: 0.25, //seconds until bricks disappear, should be very low
    playerSplatterUpdateRate: 100, //the amount of time between position changes, in milliseconds. once again only changes how smooth it will look
    

    //bullet hole settings:
    bulletHoleTime: 20, // seconds until bullet holes disappear, set to 0 or false to disable bullet holes
    bulletHoleSize: "bullet", //size of the horizontal and vertical lengths of the bullet hole. you can set it to "bullet" to link it to the bulletSize
    bulletHoleColor: "000000", //color of the hole brick, i dont see a reason for it to not be black
    bulletHoleInGround: false, //create a hole if the bullet hits the ground

    //explosion settings:
    explosion: false, //bullets cause an explosion when hitting something, this overrides the default player damage function.
    explosionDiameter: 6, //the initial diameter of the explosion (the explosion will grow). in studs
    explosionVolume: false, //a replacement for the diameter, the volume is the 3D space of an object, the diameter is the cubic root of the volume. in studs^3. for example a volume of 1000 studs^3 would give us a 1d side length of 10 because 10*10*10 = 1000
    explosiveness: 0.75, //should be 0-1, the explosiveness controls the transparency that the explosion starts in, and from there effects the explosion time, size growth, damage and knockback
    explosionInnerColor: "#FF0000", //defaults to #FF0000
    explosionOuterColor: "#FFA500", //defaults to #FFA500
    explosionDamageMultiplier: 10, //simply a multiplier you can play with, defaults to one
    explosionKnockbackMultiplier: 4, //simply a multiplier you can play with, defaults to one
    explosionDamageOffset: 16, //the higher it is, the less signifact being close to the explosion center is, it will also reduce the damage so raise the damage multiplier
    explosionWallClipMode: true, //if set to true then the explosion wont clip through walls: the explosion will be halved when hitting a wall, with the part that wouldve gone behind the wall removed and the part infront of the wall remaining, if set to false then the explosion will happen normall with the center in the walls hitting position and a half clipping through the wall to the other room

    //extra stuff, for developers mostly
    specialHitFunction: false, //for developers i guess, this overides both the default player hit function and the explosion, it is called when hit walls, players, and nothing (boundaries or travel distance maximum reached)
    AmmoPerPack: 8, //if you use limited ammo then you can add ammo boxes with the built in AmmoPack(brick, guns, size) function that takes a brick and gives it ammo pack functionality (add ammo to guns and disappear on touch). that function uses this value for how much ammo it adds to the gun.
}, 
]


/*
INFO BOXES:



1. Death Animations: 

function: FallOver - bricks are created in place of the dead players body parts and have physics(gravity) applied on them. this function is nice if you want a nice death animation like limbs detaching in roblox
parameters:
1: time - time in seconds until the body parts disappear from the clients
2: fall direction modifier - this determines where the body will fall, at 1 it will fall forward from where it is facing, at -1 it will fall backwards and at 0 it wont fall in any direction and instead stay stacked, if theres lag then the body parts will just get thrown around
3: color - this overrides the players body colors and sets the players entire avatar to some color, leave it as false for the players normal colors to appear

function: statuePlayer - bricks are created in place of the dead players body parts but dont have physics applied on them, instead remaining like a statue. this is nice if you want death animations like stonify/freeze/voidify etc..
parameters:
1: time - time in seconds until the statue is deleted
3: color - this overrides the players body colors and sets the players entire avatar to some color, leave it as false for the players normal colors to appear

function: deathani - the original death animation from smartlion's crimson gun script, its a small splatter
parameters:
1: color - if set to a color all the bricks will that color, if left as false it chooses a random color (the original setting)




*/


//ADVANCED OPTIONS
playersCollision = Guns.some(gun => gun.rayCastingAim) //whether or not to create collision between players using invisible bricks, this is important here because in the clients raycast (used in raycast aiming mode) only bricks with collision enabled are checked against the mouse, so if you click on another player the raycast will return the ground or whatever is behind that player.
teamIgnorePlayersCollision = true //if true, there wont be collision between team members
giveGunsOnJoin = true
disableAvatarTools = true
rayCastingBoundariesCheck = false //set gunSettings to true to see the raycast boundaries of guns, for testing purposes.
WorldBoundaries = [ //the borders beyond which bullets get destroyed regardless of their travel distance
    new Vector3(-9999, -9999, -200), //minimums
    new Vector3(9999, 9999, 9999) //maximums
]
reloadingKey = "r" //the key to reload guns with, set to false or delete to make guns only reload automatically if thats enabled
automaticReloading = 1 // 1 to reload when trying to shoot with an empty magazine, 2 to reload when the last bullet in the magazine was shot, 3 to reload when last bullet was shot AND when the gun is re-equipped with an empty magazine, 4 to reload when trying to shoot AND when re-equipped, 5 to reload when re-equipped, 0 or anything else to not reload automatically





//you can ignore everything from this point






function randomColor() {
    return '#' + ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function quadratic(a, b, c) {
    let answers = []
    let inSqrt = b**2 - 4*a*c
    if (inSqrt == 0) answers.push(-b/2/a)
    else if (inSqrt > 0) {
        inSqrt = Math.sqrt(inSqrt)
        answers.push((-b+inSqrt)/2/a)
        answers.push((-b-inSqrt)/2/a)
    }
    return answers
}


gunModelsOffsets = {//offset is from the players position, player scale accounted for
    11844: player => new Vector3(
        -Math.sin(player.rotation.z/180*Math.PI)*2.136*player.scale.y -Math.sin((player.rotation.z-90)/180*Math.PI)*1.5*player.scale.x, //x
        -Math.cos(player.rotation.z/180*Math.PI)*2.136*player.scale.y -Math.cos((player.rotation.z-90)/180*Math.PI)*1.5*player.scale.x, //y
        4.375*player.scale.z) //z
    ,
    6929: player => new Vector3(
        -Math.sin(player.rotation.z/180*Math.PI)*2.75*player.scale.y -Math.sin((player.rotation.z-90)/180*Math.PI)*1.5*player.scale.x, //x
        -Math.cos(player.rotation.z/180*Math.PI)*2.75*player.scale.y -Math.cos((player.rotation.z-90)/180*Math.PI)*1.5*player.scale.x, //y
        4.2*player.scale.z) //z
    ,
}

GroundAsABrick = new Brick(new Vector3(-Game.world.environment.baseSize/2, -Game.world.environment.baseSize/2, 0), new Vector3(Game.world.environment.baseSize, Game.world.environment.baseSize, 0), Game.world.environment.baseColor)
currentGunID = 0
reloadableGunExists = false
if (giveGunsOnJoin) Game.on("initialSpawn", (player) => {
    GunTools.forEach(tool => {player.addTool(tool)})
})
GunTools = new Array(Guns.length)
for (let i = 0; i < Guns.length; i++) {
    GunTools[i] = variablesToNewTool(Guns[i])
}

function variablesToNewTool (gunSettings) {
    gunSettings.ID = currentGunID++
    tool = new Tool(gunSettings.toolName)
    tool.gunSettings = gunSettings
    tool.model = gunSettings.gunModel
    
    if (!gunSettings.toggleShooting) tool.on("activated2", onActivation)
    else tool.on("activated2", onToggle)
    
    if (gunSettings.firstPersonLock) {
        tool.on("equipped", player => {
            player.setCameraType("first")

        })
        tool.on("unequipped", player => {
            player.setCameraType("orbit")
        })
    }
    if (gunSettings.rayCastingAim) {
        tool.on("equipped", player => {
            RayWalls(player, gunSettings.rayCastingDistanceHorizontal, gunSettings.rayCastingDistanceVertical)

        })
        tool.on("unequipped", player => {
            RayWalls(player)
        })
    }
    if (gunSettings.toggleShooting) {
        tool.on("unequipped", player => {
            if (player.autoshooting) {
                clearInterval(player.autoshooting)
                player.autoshooting = false
            }
        })
    }
    

    gunSettings.gunAsOrigin = gunSettings.gunAsOrigin && typeof gunModelsOffsets[gunSettings.gunModel] == "function"

    gunSettings.deathAnimation = typeof gunSettings.deathAnimation == "function" ? gunSettings.deathAnimation : false
    gunSettings.deathAnimationParameters = gunSettings.deathAnimationParameters || []
    if (gunSettings.wallsBlock) {
        gunSettings.gamemap = (gunSettings.onlyCollidables ? Game.world.bricks.filter(brick => brick.collision) : [...Game.world.bricks]).filter(brick => !brick.name?.startsWith("effect*"))
        gunSettings.gamemap.push(GroundAsABrick)
    }
    gunSettings.bulletScale = new Vector3(gunSettings.bulletSize, gunSettings.bulletSize, gunSettings.bulletSize)
    if (!isNaN(gunSettings.bulletGravity)) gunSettings.bulletGravity = new Vector3(0, 0, -gunSettings.bulletGravity)
    if (gunSettings.wallSplatterColor) gunSettings.wallSplatterSettings = Object.fromEntries(Object.entries(gunSettings).filter(config => config[0].startsWith("wallSplatter")).map(config => ['s'+config[0].slice(5), config[1]]))
    if (gunSettings.playerSplatterColor) gunSettings.playerSplatterSettings = Object.fromEntries(Object.entries(gunSettings).filter(config => config[0].startsWith("playerSplatter")).map(config => ['s'+config[0].slice(7), config[1]]))
    if (isNaN(gunSettings.cartridge) || gunSettings.cartridge < 1) {
        gunSettings.cartridge = undefined
        gunSettings.reloadingTime = undefined
    }
    else if (isNaN(gunSettings.reloadingTime) || gunSettings.reloadingTime < 0) {
        gunSettings.cartridge = undefined
        gunSettings.reloadingTime = undefined
    }
    if (isNaN(gunSettings.uses) || gunSettings.uses < 1) gunSettings.uses = undefined
    if (gunSettings.cartridge || gunSettings.limitedAmmo) {
        tool.on("equipped", player => {
            if (gunSettings.limitedAmmo && player[gunSettings.ID + "*Ammo"] === undefined) player[gunSettings.ID + "*Ammo"] = gunSettings.limitedAmmo
            if (gunSettings.cartridge && player[gunSettings.ID + "*Loaded"] === undefined) {
                if (gunSettings.limitedAmmo && player[gunSettings.ID + "*Ammo"] < gunSettings.cartridge) player[gunSettings.ID + "*Loaded"] = player[gunSettings.ID + "*Ammo"]
                else player[gunSettings.ID + "*Loaded"] = gunSettings.cartridge
            }
            showAmmo(gunSettings, player)
        })
        tool.on("unequipped", player => {player.bottomPrint("")})
    }
    if (gunSettings.cartridge) {
        if (automaticReloading >= 3 && automaticReloading <= 5) tool.on("equipped", player => {
            if (player[gunSettings.ID + "*Loaded"] < 1 && !player[gunSettings.ID + "*Reloading"])
                reloadGun(gunSettings, player)
        })
        tool.on("unequipped", player => {
            if (player[gunSettings.ID + "*Reloading"]) {
                clearTimeout(player[gunSettings.ID + "*Reloading"])
                player[gunSettings.ID + "*Reloading"] = false
                player.centerPrint("")
            }
        })
    }

    if (!reloadableGunExists && gunSettings.cartridge && reloadingKey) {
        reloadableGunExists = true
        Game.players.forEach(player => {
            player.keypress(key => {
                if (key == reloadingKey) {
                    let gunSettings = player.toolEquipped?.gunSettings
                    if (gunSettings?.cartridge) reloadGun(gunSettings, player)
                }
            })
        })
        Game.on("initialSpawn", player => {
            player.keypress(key => {
                if (key == reloadingKey) {
                    let gunSettings = player.toolEquipped?.gunSettings
                    if (gunSettings?.cartridge) reloadGun(gunSettings, player)
                }
            })
        })
    }

    return tool
}
function reloadGun(gunSettings, attacker) {
    if (!attacker[gunSettings.ID + "*Reloading"]) attacker[gunSettings.ID + "*Reloading"] = setTimeout(() => {
        if (gunSettings.limitedAmmo && attacker[gunSettings.ID + "*Ammo"] < gunSettings.cartridge) attacker[gunSettings.ID + "*Loaded"] = attacker[gunSettings.ID + "*Ammo"]
        else attacker[gunSettings.ID + "*Loaded"] = gunSettings.cartridge
        attacker[gunSettings.ID + "*Reloading"] = false
        showAmmo(gunSettings, attacker)
    }, gunSettings.reloadingTime)
    attacker.centerPrint("reloading cartridge...", gunSettings.reloadingTime/1000)
    
}
function showAmmo(gunSettings, attacker) {
    let ammoPrint = "Ammo:"
    if (attacker[gunSettings.ID + "*Loaded"] !== undefined) ammoPrint += ` ${attacker[gunSettings.ID + "*Loaded"]}/${gunSettings.cartridge}`
    if (attacker[gunSettings.ID + "*Ammo"] !== undefined) ammoPrint += "  " + attacker[gunSettings.ID + "*Ammo"]
    attacker.bottomPrint(ammoPrint, 100)
}



function onToggle(attacker, clickpos) {
    let gunSettings = attacker.toolEquipped?.gunSettings
    if (!gunSettings) return
    if (attacker.autoshooting) {
        clearInterval(attacker.autoshooting)
        attacker.autoshooting = false
    }
    else {
        attacker.autoshooting = attacker.setInterval(onActivation.bind(gunSettings, attacker, clickpos), gunSettings.cooldown)
    }
    
}
async function onActivation(attacker, clickpos) {
    let gunSettings = attacker.toolEquipped?.gunSettings
    if (!gunSettings) return
    if (!attacker.alive || attacker[gunSettings.ID + "*Cooldown"]) return
    
    if (gunSettings.limitedAmmo && attacker[gunSettings.ID + "*Ammo"] < 1) return attacker.centerPrint("youre out of ammo!")
    if (gunSettings.cartridge) {
        if (attacker[gunSettings.ID + "*Reloading"]) return
        if (attacker[gunSettings.ID + "*Loaded"] < 1) {
            if (automaticReloading >= 1 && automaticReloading <= 4) reloadGun(gunSettings, attacker)
            else attacker.centerPrint("you need to reload!")
            return
        }
    }
    if (gunSettings.uses) {
        if (attacker[gunSettings.ID + "*UsesLeft"] === undefined) attacker[gunSettings.ID + "*UsesLeft"] = gunSettings.uses
        if (--attacker[gunSettings.ID + "*UsesLeft"] < 1) attacker.removeTool(attacker.toolEquipped)
    } 
    attacker[gunSettings.ID + "*Cooldown"] = true
    setTimeout(() => {if (attacker) attacker[gunSettings.ID + "*Cooldown"] = false}, gunSettings.cooldown)
    attacker.centerPrint("cooldown...", gunSettings.cooldown/1000)
    if (gunSettings.cartridge) attacker[gunSettings.ID + "*Loaded"]--
    if (gunSettings.limitedAmmo) attacker[gunSettings.ID + "*Ammo"]--
    if (gunSettings.cartridge || gunSettings.limitedAmmo) showAmmo(gunSettings, attacker)
    if (automaticReloading >= 2 && automaticReloading <= 3 && attacker[gunSettings.ID + "*Loaded"] < 1 && !attacker[gunSettings.ID + "*Reloading"]) 
        reloadGun(gunSettings, attacker)
    
    let bulletColor = gunSettings.color
    if (bulletColor == "team") bulletColor = attacker.team.color
    if (bulletColor == "random") bulletColor = randomColor()
    let startpos = new Vector3(0, 0, 0).addVector(attacker.position)
    gunSettings.gunAsOrigin ? startpos.addVector(gunModelsOffsets[gunSettings.gunModel](attacker)) : (startpos.z += 4*attacker.scale.z)
    let brick = new Brick(new Vector3(-gunSettings.bulletSize/2, -gunSettings.bulletSize/2, -gunSettings.bulletSize/2).addVector(startpos), gunSettings.bulletScale, bulletColor)
    brick.visibility = gunSettings.visibility ?? 1
    brick.shape = "celaria"

    let path, dist
    if (gunSettings.rayCastingAim && clickpos) {
        path = clickpos.copy().subVector(startpos)
        if (!gunSettings.threeDimensional) path.z = 0
        dist = pythagoras(path)
        if (gunSettings.directionShake || gunSettings.verticalAngleOffset || gunSettings.horizontalAngleOffset) {
            //path.multiply(1/dist, 1/dist, 1/dist)
            let zrot = Math.asin(path.z/dist)
            let xyrot = Math.atan(Math.abs(path.y/path.x))
            if (path.x < 0) xyrot = Math.PI - xyrot
            if (path.y < 0) xyrot *= -1
            if (gunSettings.directionShake) {
                zrot += (Math.random()-0.5)*gunSettings.directionShake/180*Math.PI
                xyrot += (Math.random()-0.5)*gunSettings.directionShake/180*Math.PI
            }
            if (gunSettings.verticalAngleOffset) zrot += gunSettings.verticalAngleOffset/180*Math.PI
            if (gunSettings.horizontalAngleOffset) xyrot += gunSettings.horizontalAngleOffset/180*Math.PI
            path = new Vector3(Math.cos(xyrot)*Math.cos(zrot), Math.sin(xyrot)*Math.cos(zrot), Math.sin(zrot))
            dist = 1
        }
    }
    else {
        let verticalrot = gunSettings.threeDimensional ? attacker.cameraRotation.x/180*Math.PI : 0 //if not 3D then the vertical angle is 0
        let horizontalrot = attacker.rotation.z/180*Math.PI
        if (gunSettings.directionShake) {
            verticalrot += (Math.random()-0.5)*gunSettings.directionShake/180*Math.PI
            horizontalrot += (Math.random()-0.5)*gunSettings.directionShake/180*Math.PI
        }
        if (gunSettings.verticalAngleOffset) verticalrot += gunSettings.verticalAngleOffset/180*Math.PI
        if (gunSettings.horizontalAngleOffset) horizontalrot += gunSettings.horizontalAngleOffset/180*Math.PI
        path = new Vector3(-Math.sin(horizontalrot)*Math.cos(verticalrot), -Math.cos(horizontalrot)*Math.cos(verticalrot), Math.sin(verticalrot)) //check the players forward direction
        dist = 1
    }

    path.multiply(gunSettings.travelDistance/dist, gunSettings.travelDistance/dist, gunSettings.travelDistance/dist)
    let endpos = startpos.copy().addVector(path)
    let hitObject, hitNormal
    let hitTime = gunSettings.travelDistance/gunSettings.speed
    gunSettings.gamemap.forEach(wall => { //raycast to the maps walls
        for (let i = 0; i < axes.length; i++) { //foreach of the 3 axes it checks the position if and where the brick hits its surface (the closer 3 surfaces out of the 6) and goes with the closest one to the bullet origin
            let ax = new Array(axes.length) //ax[0] is the axis being currently checked for hit, ax[1] and ax[2] are the other axes
            for (let j = 0; j < axes.length; j++) ax[j] = axes[(j+i)%3] //i=0 => ax=[x,y,z], i=1 => ax=[y,z,x], i=2 => ax=[z,x,y]
            let xsign = path[ax[0]] > 0
            let hitX = wall.position[ax[0]] + (xsign ? 0 : wall.scale[ax[0]])
            if (!gunSettings.bulletGravity || !gunSettings.bulletGravity[ax[0]]) {
                if (endpos[ax[0]] < hitX ^ xsign) {
                    let atd = (hitX - startpos[ax[0]])/path[ax[0]]
                    let time = atd*(gunSettings.travelDistance/gunSettings.speed)
                    if (time > 0 && time < hitTime) {
                        let hitPoint = new Vector3(atd*path.x, atd*path.y, atd*path.z).addVector(startpos)
                        if (gunSettings.bulletGravity) for (let j = 1; j < ax.length; j++) if (gunSettings.bulletGravity[ax[j]]) hitPoint[ax[j]] += 0.5*gunSettings.bulletGravity[ax[j]]*(time**2)
                        
                        if (hitPoint[ax[1]] + gunSettings.bulletSize*0.4 > wall.position[ax[1]] && hitPoint[ax[1]] - gunSettings.bulletSize*0.4 < wall.position[ax[1]] + wall.scale[ax[1]] && hitPoint[ax[2]] + gunSettings.bulletSize*0.4 > wall.position[ax[2]] && hitPoint[ax[2]] - gunSettings.bulletSize*0.4 < wall.position[ax[2]] + wall.scale[ax[2]]) {
                            endpos = hitPoint
                            hitObject = wall
                            hitObject.isBrick = true

                            hitNormal = new Vector3(0, 0, 0)
                            hitNormal[ax[0]] = -path[ax[0]]

                            hitTime = time
                        }
                    }
                }
            }
            else { //this took me way longer than it should have
                let velX = path[ax[0]]/pythagoras(path)*gunSettings.speed
                let timetaken = quadratic(gunSettings.bulletGravity[ax[0]]*0.5, velX, -(hitX - startpos[ax[0]])) //x = vt + 0.5at^2
                
                let vswitch = velX > 0 ^ gunSettings.bulletGravity[ax[0]] > 0 //if the direction of the velocity is different than the direction of the acceleration 
                let velswitch = vswitch ? -velX/gunSettings.bulletGravity[ax[0]] : hitTime
                let start = 0
                let end = velswitch
                while (timetaken) {
                    
                
                    for (let ans = 0; ans < timetaken.length; ans++) {
                        let time = timetaken[ans]
                        if (time > start && time < end && time < hitTime) {
                            let atd = time/(gunSettings.travelDistance/gunSettings.speed)
                            let hitPoint = new Vector3(atd*path.x, atd*path.y, atd*path.z).addVector(startpos)
                            for (let j = 0; j < ax.length; j++) if (gunSettings.bulletGravity[ax[j]]) hitPoint[ax[j]] += 0.5*gunSettings.bulletGravity[ax[j]]*(time**2)

                            if (hitPoint[ax[1]] + gunSettings.bulletSize*0.4 > wall.position[ax[1]] && hitPoint[ax[1]] - gunSettings.bulletSize*0.4 < wall.position[ax[1]] + wall.scale[ax[1]] && hitPoint[ax[2]] + gunSettings.bulletSize*0.4 > wall.position[ax[2]] && hitPoint[ax[2]] - gunSettings.bulletSize*0.4 < wall.position[ax[2]] + wall.scale[ax[2]]) {
                                endpos = hitPoint
                                hitObject = wall
                                hitObject.isBrick = true

                                hitNormal = new Vector3(0, 0, 0)
                                hitNormal[ax[0]] = -velX - gunSettings.bulletGravity[ax[0]]*time

                                hitTime = time
                            }
                        }

                    }
                    if (end < hitTime) {
                        start = end
                        end = hitTime
                        timetaken = quadratic(gunSettings.bulletGravity[ax[0]]*0.5, velX, -((wall.position[ax[0]] + (xsign ? wall.scale[ax[0]] : 0)) - startpos[ax[0]]))
                    }
                    else timetaken = false
                }
                
            }
            //im not gonna add rotation support for now even though i know how to. (incomprehensible math alert) if you want to do so yourself you need to use the set of 3 axes that match the walls rotation instead of the normal x, y, z axes which match all the unrotated walls rotation, translate the ray (path and startpos) to the new axes (cartesian) system (with lots of trigo), run this walls raycast code like normal to get the hit info and then tranlate the hit point and normal vector back to the x, y, z axes
                
        }
    })
    if (gunSettings.shotPathBrick) {
        let shotpath = endpos.copy().subVector(startpos)
        let shotdist = pythagoras(shotpath)
        let shotscale = new Vector3(shotdist, gunSettings.bulletSize, gunSettings.bulletSize)
        let pbpos = endpos.copy().addVector(startpos).multiply(0.5, 0.5, 0.5).subVector(new Vector3(0.5, 0.5, 0.5).multiplyVector(shotscale))
        
        let pathbrick = new Brick(far, shotscale, bulletColor)
        pathbrick.collision = false
        pathbrick.visibility = gunSettings.visibility ?? 1
        pathbrick.name = "effect*pathbrick*"
        Game.newBrick(pathbrick)
        setTimeout(() => {
        new PacketBuilder(9)
            .write("uint32", pathbrick.netId)
            .write("string", "rot2")
            .write("int32", 0)  //x
            .write("int32", Math.asin(shotpath.z/shotdist)/Math.PI*180 *(shotpath.x>=0?1:-1))  //y
            .write("int32", -Math.atan(shotpath.y/shotpath.x)/Math.PI*180)  //z
            .broadcast()
        pathbrick.setPosition(pbpos)
        pathbrick.setInterval(() => {
            if (pathbrick.visibility < 0.25) pathbrick.destroy()
            else pathbrick.setVisibility(pathbrick.visibility - 0.25)
        }, 50)
        })
        
        
    }
    
    

    let hittablePlayers = Game.players.filter(player => player.alive && player != attacker && (!gunSettings.ByTeams || !gunSettings.ignoreTeammates || player.team != attacker.team))
    if (gunSettings.hitBots && Game.world.bots.length) {
        hittablePlayers = hittablePlayers.concat(Game.world.bots)
        Game.world.bots.forEach(bot => {
            if (!bot.isBot) {
                bot.health = 100
                bot.isBot = true
                bot.setHealth = (health) => {
                    bot.health = health
                    if (health <= 0) bot.kill()
                }
                bot.kill = () => {
                    bot.destroy()
                }
                bot.username = "BOT " + bot.name
            }
        })
    }

    if (!gunSettings.noProjectile ) {
        
        let updatesleft = Math.floor(hitTime*(1000/gunSettings.updateRate))
        if (updatesleft > 0) {
            brick.collision = false
            brick.name = "effect*bullet*" + gunSettings.toolName
            Game.newBrick(brick)
        
            let timemultip = gunSettings.updateRate/1000
            dist = pythagoras(path)
            let vel = path.copy().multiply(1/dist, 1/dist, 1/dist)
            let distperupdate = gunSettings.speed * (timemultip)
            vel.multiply(distperupdate, distperupdate, distperupdate)
            let gravity = gunSettings.bulletGravity
            if (gravity) {
                gravity = gravity.copy().multiply((timemultip**2)/2, (timemultip**2)/2, (timemultip**2)/2)
                vel.addVector(gravity)
                gravity = gravity.multiply(2, 2, 2)
            }

            for (; !brick.destroyed && updatesleft > 0; updatesleft--) {
                await sleep(gunSettings.updateRate)
                let curstartpos = brick.center
                let curendpos = brick.center.addVector(vel)
                do {
                    let rayhit = rayHitPlayers(gunSettings, curstartpos, curendpos, hittablePlayers)
                    curstartpos = rayhit[0]
                    if (rayhit[1]) {
                        if (!gunSettings.specialHitFunction) {
                            if (!gunSettings.explosion) onPlayerHit(gunSettings, attacker, rayhit[1])
                            else Boom(gunSettings, rayhit[0], attacker, [...hittablePlayers])
                        }
                        else gunSettings.specialHitFunction(gunSettings, attacker, rayhit[1], rayhit[0], vel.copy().multiply(-1,-1,-1), hittablePlayers)
                        if (!gunSettings.penetration) {
                            brick.destroy()
                            endpos = rayhit[0]
                            hitObject = rayhit[1]
                            if (!brick.destroyed)brick.destroyed = true //wtf issue
                            
                        }
                        else {
                            RemoveFromArray(rayhit[1], hittablePlayers)
                            splatter(gunSettings, rayhit[0], vel.copy().multiply(-1, -1, -1), rayhit[1], bulletColor)
                        }
                    }
                } while (!brick.destroyed && (curstartpos.x != curendpos.x || curstartpos.y != curendpos.y || curstartpos.z != curendpos.z))

                if (!brick.destroyed) {
                    brick.setPosition(brick.position.addVector(vel))
                    if (gravity) vel.addVector(gravity)

                    for (let i = 0; i < 2; i++) for (let a in axes) 
                        if ((brick.position[axes[a]] > WorldBoundaries[i][axes[a]]) == i) return brick.destroy() //since 0 is false and 1 is true, small > big == 0 and big > small == 1
                    
                }

            

            }
        
        }
    }
    
    if (!brick.destroyed) {
        let rayhit = rayHitPlayers(gunSettings, brick.center, endpos, hittablePlayers)
        if (rayhit[1]) {
            if (!gunSettings.penetration) endpos = rayhit[0]
            else 
            hitObject = rayhit[1]
            if (!gunSettings.specialHitFunction) {
                if (!gunSettings.explosion) onPlayerHit(gunSettings, attacker, rayhit[1])
                else Boom(gunSettings, rayhit[0], attacker, hittablePlayers)
            }
            else gunSettings.specialHitFunction(gunSettings, attacker, hitObject, rayhit[0], path.copy().multiply(-1,-1,-1), hittablePlayers)
        }
        brick.destroy()

    }
    if (hitObject) {
        if (hitObject.isBrick && gunSettings.bulletHoleTime) bulletHole(gunSettings, endpos, hitNormal, hitObject)
        splatter(gunSettings, endpos, path.copy().multiply(-1, -1, -1), hitObject, bulletColor)
        if (gunSettings.explosion && !gunSettings.specialHitFunction) Boom(gunSettings, endpos, attacker, hittablePlayers, hitNormal)
    }
    if (gunSettings.specialHitFunction) gunSettings.specialHitFunction(gunSettings, attacker, hitObject, endpos, hitNormal || path.copy().multiply(-1,-1,-1), hittablePlayers)

        
        
    
}
const axes = ["x", "y", "z"] //so what?
function bulletHole (gunSettings, position, normal, wall, bulletcolor) {
    let holeSize = gunSettings.bulletHoleSize
    if (holeSize == "bullet") holeSize = gunSettings.bulletSize
    let a1 = normal.x ? "x" : (normal.y ? "y" : "z")
    let holeScale = new Vector3(holeSize, holeSize, holeSize)
    holeScale[a1] = Math.min(holeSize, 0.0625)
    let holePosition = new Vector3 (-holeSize/2, -holeSize/2, -holeSize/2)
    holePosition[a1] = normal[a1] > 0 ? 0 : - holeScale[a1]
    holePosition.addVector(position)
    let Color = gunSettings.bulletHoleColor
    if (Color == "random") Color = randomColor()
    if (Color == "bullet") Color = bulletcolor
    let hole = new Brick(holePosition, holeScale, Color)
    hole.collision = false
    hole.name = "effect*bulletHole*" + gunSettings.toolName
    axes.forEach(a2 => {if (a2 != a1) {
        if (holePosition[a2] + holeSize > wall.position[a2] + wall.scale[a2]) holeScale[a2] = wall.position[a2] + wall.scale[a2] - holePosition[a2]
        if (holePosition[a2] < wall.position[a2]) {
            holeScale[a2] -= wall.position[a2] - holePosition[a2]
            holePosition[a2] = wall.position[a2]
        }
    }})

    Game.newBrick(hole)
    setTimeout(() => {if (!hole.destroyed) hole.destroy()}, gunSettings.bulletHoleTime*1000)
}
function onPlayerHit (gunSettings, attacker, attacked) {
    if (attacked.alive) {
        if (!gunSettings.ByTeams || attacker.team != attacked.team) {
            attacked.setHealth(attacked.health - gunSettings.damage)
            if (!attacked.alive) {
                Game.messageAll(`\\c6${attacker.username} killed ${attacked.username} with a ${gunSettings.toolName}`)
                if (gunSettings.deathAnimation) gunSettings.deathAnimation(attacked, ...gunSettings.deathAnimationParameters)
                attacker.setScore(attacker.score+1)
            }
        }
    }
}
function splatter (gunSettings, position, direction, hitObject, bulletcolor) {
    if (hitObject) {
        let splatterSettings
        let splatterColor
        let splatterVisibility = 1
        if (hitObject.isBot || hitObject.userId) {
            splatterSettings = gunSettings.playerSplatterSettings
            if (splatterSettings) {
                splatterColor = splatterSettings.splatterColor
                splatterColor = hitObject.colors[splatterColor] || splatterColor
            }
        }
        else if (hitObject.isBrick) {
            splatterSettings = gunSettings.wallSplatterSettings
            if (splatterSettings) {
                if (hitObject == GroundAsABrick && !splatterSettings.splatterInGround) return
                splatterColor = splatterSettings.splatterColor
                if (splatterColor == "wall") {
                    splatterColor = hitObject.color
                    splatterVisibility = hitObject.visibility
                }
            }
        }
        if (!splatterSettings) return
        if (splatterColor == "bullet") splatterColor = bulletcolor
        if (splatterColor == "random") splatterColor = randomColor()
        
        
        
        let scale = new Vector3(splatterSettings.splatterSize, splatterSettings.splatterSize, splatterSettings.splatterSize)
        let pos = position.copy().sub(splatterSettings.splatterSize/2, splatterSettings.splatterSize/2, splatterSettings.splatterSize/2)
        let dist = pythagoras(direction)
        direction.multiply(1/dist, 1/dist, 1/dist)
        let zrot = Math.asin(direction.z)
        let xyrot = Math.atan(Math.abs(direction.y/direction.x))
        if (direction.x < 0) xyrot = Math.PI - xyrot
        if (direction.y < 0) xyrot *= -1
        for (let amount = splatterSettings.splatterAmount; amount > 0; amount--) {
            let newzrot = zrot + (Math.random()-0.5)*Math.PI/2 //random difference of up to 45 degrees in both ways
            let newxyrot = xyrot + (Math.random()-0.5)*Math.PI/2 //random difference of up to 45 degrees in both ways
            let vel = new Vector3(Math.cos(newxyrot) * Math.cos(newzrot), Math.sin(newxyrot) * Math.cos(newzrot), Math.sin(newzrot))
            
            let persecond = (1000/splatterSettings.splatterUpdateRate)
            vel.multiply(splatterSettings.splatterSpeed/persecond, splatterSettings.splatterSpeed/persecond, splatterSettings.splatterSpeed/persecond)
            let updatesleft = splatterSettings.splatterTime*persecond
            let scrubble = new Brick(pos, scale, splatterColor)
            scrubble.collision = false
            scrubble.visibility = splatterVisibility
            scrubble.shape = "celaria"
            scrubble.name = "effect*splatter*" + splatterSettings.toolName
            Game.newBrick(scrubble)
            scrubble.setInterval(() => {
                scrubble.setPosition(scrubble.position.addVector(vel))
                updatesleft--
                if (updatesleft <= 0) scrubble.destroy()
            }, splatterSettings.splatterUpdateRate)
        }
    }
}
function rayHitPlayers (gunSettings, startpos, endpos, playersarray) {
    let hitObject
    let path = endpos.copy().subVector(startpos)
    let minwaymade = 1
    playersarray.forEach(attacked => {
        let zsign = path.z > 0

        let zmin = attacked.position.z - startpos.z
        let zmax = attacked.position.z + 5*attacked.scale.z - startpos.z

        let radius = attacked.scale.x + gunSettings.bulletSize/2
        let YXratio = path.y/path.x
        let ZXratio = path.z/path.x
        let circleX = attacked.position.x - startpos.x
        let circleY = attacked.position.y - startpos.y

        let sidepointfound = false
        if (path.z != 0) {
            let zhit = zsign ? zmin : zmax
            let waymade = zhit/path.z
            if (waymade > 0) {
                if (waymade < minwaymade) {
                    let point = new Vector3(path.x * waymade, path.y * waymade, path.z * waymade)
                    if ((point.x - circleX)**2 + (point.y - circleY)**2 < radius**2) {
                        endpos = point.addVector(startpos)
                        hitObject = attacked
                        minwaymade = waymade
                        sidepointfound = true
                    }
                }
            }
        }
        
        
        if (!sidepointfound) { //main cylinder surface calculation
            let bulletTouches = quadratic(-1 -(YXratio**2), 2*circleX + 2*circleY*YXratio, -(circleY**2) -(circleX**2) + radius**2)
            if (bulletTouches.length) {
                for (let i = 0; i < bulletTouches.length; i++) {
                    let point = new Vector3(bulletTouches[i], bulletTouches[i]*YXratio, bulletTouches[i]*ZXratio)
                    //console.log(point)
                    let zmin = Math.max((zsign ? startpos.z : endpos.z), attacked.position.z) - startpos.z
                    let zmax = Math.min((zsign ? endpos.z : startpos.z), attacked.position.z + 5*attacked.scale.z) - startpos.z
                    let waymade = point.x/path.x
                    if (waymade > 0 && waymade < minwaymade && point.z >= zmin && point.z <= zmax) {
                        endpos = point.addVector(startpos)
                        hitObject = attacked
                        minwaymade = waymade
                    }
                }
            }
        }
    })
    return [endpos, hitObject]
}
printvec3 = (vec3) => `${vec3.x}, ${vec3.y}, ${vec3.z}`
pythagoras = (vec3) => Math.sqrt(vec3.x**2 + vec3.y**2 + vec3.z**2)

function deathani(p, color) {
    let px = p.position.x, py = p.position.y, pz = p.position.z
    let brick = new Brick(new Vector3(px,py,pz+3),new Vector3(1,1,1), color || randomColor())
    Game.newBrick(brick)
    var grav = 1.3
    var time = 0
    var sped = 1
    var prot = randomIntFromInterval(0,9999)
    brick.setInterval(() => {
        var rotx = brick.position.x += sped * Math.sin(prot / -60)
        var roty = brick.position.y - sped * Math.cos(prot / -60)
        var rotz = brick.position.z += grav
        brick.setPosition(new Vector3(rotx,roty,rotz))
        time++
        if (time > 1) {
            grav -= 0.1
            sped -= 0.1
            time++
            if (time > 80 && !brick.destroyed)
            brick.destroy()
        }
    }, 35)
}


far = new Vector3(-1000,-1000,-1000)
headscale = new Vector3(1, 1, 1)
torsoscale = new Vector3(2, 1, 2)
limbscale = new Vector3(1, 1, 2)
async function fallOver(p, time = 3, fallOverModifier = 0, color = false){ //my modification of the ragDoll function, now with math! (fun)
    let position = p.position.copy()
    let prot = p.rotation.z
    //create bricks for each body part
    bodyparts = playerStatue(p, color)
    
    bodyparts.forEach(brick => {
        brick.name = "ragdoll*" + p.userId
    })
    Game.newBricks(bodyparts)

    //apply physics on all of them
    await sleep(0)
    bodyparts.forEach(brick => {
        new PacketBuilder("Brick")
        .write("uint32", brick.netId)
        .write("string", "kill")
        .write("uint32", time*1000)
        .broadcast()
    })
    Game.world.bricks = Game.world.bricks.filter(brick => !bodyparts.includes(brick))
    await sleep(0)
    
    prot = prot/180 * Math.PI
    if (fallOverModifier) bodyparts.forEach(brick => {//to make the person fall over, the higher the body part brick is, the more forward/backward it will be
        let forwardBy = (brick.position.z - position.z)/4/p.scale.z*p.scale.y //should be 1 for head, 0.5 for torso and arms and 0 for legs, player scale accounted for
        brick.position.add(-Math.sin(prot)*forwardBy, -Math.cos(prot)*forwardBy, 0)
        brick.setPosition(brick.position)
    })
}

function playerStatue (p, color) {
    let position = p.position.copy()
    let prot = p.rotation.z
    let scale = p.scale//new Vector3(p.scale.x, p.scale.z, p.scale.y)
    //create bricks for each body part
    let pheadBrick = new Brick(far,headscale.copy().multiplyVector(scale), color || p.colors.head)
    let ptorsoBrick = new Brick(far,torsoscale.copy().multiplyVector(scale), color || p.colors.torso)
    let pleftArmBrick = new Brick(far,limbscale.copy().multiplyVector(scale), color || p.colors.leftArm)
    let prightArmBrick = new Brick(far,limbscale.copy().multiplyVector(scale), color || p.colors.rightArm)
    let pleftLegBrick = new Brick(far,limbscale.copy().multiplyVector(scale), color || p.colors.leftLeg)
    let prightLegBrick = new Brick(far,limbscale.copy().multiplyVector(scale), color || p.colors.rightLeg)
    let bodyparts = [pheadBrick, ptorsoBrick, pleftArmBrick, prightArmBrick, pleftLegBrick, prightLegBrick]
    bodyparts.forEach(brick => {
        brick.rotation = prot//+90
    })
    prot = prot/180 * Math.PI
    let strAngle = Math.PI/2
    pheadBrick.setPosition(new Vector3(position.x - pheadBrick.scale.x/2, position.y - pheadBrick.scale.y/2, position.z + 4.5*scale.z - pheadBrick.scale.z/2))
    ptorsoBrick.setPosition(new Vector3(position.x - ptorsoBrick.scale.x/2, position.y - ptorsoBrick.scale.y/2, position.z + 3*scale.z - ptorsoBrick.scale.z/2))
    pleftArmBrick.setPosition(new Vector3(position.x -Math.sin(prot+strAngle)*1.5*scale.x - pleftArmBrick.scale.x/2, position.y -Math.cos(prot+strAngle)*1.5*scale.x - pleftArmBrick.scale.y/2, position.z + 3*scale.z - pleftArmBrick.scale.z/2))
    prightArmBrick.setPosition(new Vector3(position.x -Math.sin(prot-strAngle)*1.5*scale.x - prightArmBrick.scale.x/2, position.y -Math.cos(prot-strAngle)*1.5*scale.x - prightArmBrick.scale.y/2, position.z + 3*scale.z - prightArmBrick.scale.z/2))
    pleftLegBrick.setPosition(position.copy().add(-Math.sin(prot+strAngle)*0.5*scale.x - pleftLegBrick.scale.x/2, -Math.cos(prot+strAngle)*0.5*scale.x - pleftLegBrick.scale.y/2, 1*scale.z - pleftLegBrick.scale.z/2))
    prightLegBrick.setPosition(position.copy().add(-Math.sin(prot-strAngle)*0.5*scale.x - prightLegBrick.scale.x/2, -Math.cos(prot-strAngle)*0.5*scale.x - prightLegBrick.scale.y/2, 1*scale.z - prightLegBrick.scale.z/2))
    return bodyparts
}

function statuePlayer(player, time = 8, color) {
    let statue = playerStatue(player, color)
    statue.forEach(brick => {brick.name = "effect*statue*"})
    Game.newBricks(statue)
    setTimeout(() => {
        statue.forEach(brick => {brick.destroy()})
    }, time*1000)
}






Game.on("initialSpawn", (player) => {
    new PacketBuilder(7)
        .write("string", "MoreClickInfo")
        .write("bool", true)
        .send(player.socket)
})

Game.onPacket(6, (packet) => {
    const player = packet.player
    packet = SmartBuffer.fromBuffer(packet.buffer)
    packet.readUInt8()

    let mouse = packet.readUInt8()
    packet.readStringNT()
    if (mouse) {
        let x = packet.readFloatLE()
        let y = packet.readFloatLE()
        let z = packet.readFloatLE()
        let winh = packet.readUInt16LE()
        let winw = packet.readUInt16LE()
        let mouse_x = packet.readUInt16LE()
        let mouse_y = packet.readUInt16LE()

        if (player.toolEquipped) player.toolEquipped.emit("activated2", player, new Vector3(x, y, z))
    }
})


empty = new Vector3(0, 0, 0)
function RayWalls (player, hordistance, verdistance) {
    if (hordistance) {
        let pos = player.position
        let walls = player.raywalls
        if (!player.raywalls) {
            walls = [
                new Brick(empty, empty),
                new Brick(empty, empty),
                new Brick(empty, empty),
                new Brick(empty, empty),
                new Brick(empty, empty),
                new Brick(empty, empty),
            ]
            walls.forEach(wall => {
                wall.visibility = (rayCastingBoundariesCheck ? 0.5 : 0)
                wall.name = "raywall*" + player.userId
            })
            player.on("moved", () => {
                if (player.rayhordistance && player.raywalls) {
                    let pos = player.position
                    let hordistance = player.rayhordistance
                    let verdistance = player.rayverdistance
                    let walls = player.raywalls
                    walls[0].setPosition(new Vector3(-hordistance, -hordistance, -verdistance).addVector(pos)); walls[0].setScale(new Vector3(hordistance*2, hordistance*2, 1))
                    walls[1].setPosition(new Vector3(-hordistance, -hordistance, -verdistance).addVector(pos)); walls[1].setScale(new Vector3(hordistance*2, 1, verdistance*2))
                    walls[2].setPosition(new Vector3(-hordistance, -hordistance, -verdistance).addVector(pos)); walls[2].setScale(new Vector3(1, hordistance*2, verdistance*2))
                    walls[3].setPosition(new Vector3(-hordistance, -hordistance, verdistance-1).addVector(pos)); walls[3].setScale(new Vector3(hordistance*2, hordistance*2, 1))
                    walls[4].setPosition(new Vector3(-hordistance, hordistance-1, -verdistance).addVector(pos)); walls[4].setScale(new Vector3(hordistance*2, 1, verdistance*2))
                    walls[5].setPosition(new Vector3(hordistance-1, -hordistance, -verdistance).addVector(pos)); walls[5].setScale(new Vector3(1, hordistance*2, verdistance*2))
                }
            })
        }
        walls[0].setPosition(new Vector3(-hordistance, -hordistance, -verdistance).addVector(pos)); walls[0].setScale(new Vector3(hordistance*2, hordistance*2, 1))
        walls[1].setPosition(new Vector3(-hordistance, -hordistance, -verdistance).addVector(pos)); walls[1].setScale(new Vector3(hordistance*2, 1, verdistance*2))
        walls[2].setPosition(new Vector3(-hordistance, -hordistance, -verdistance).addVector(pos)); walls[2].setScale(new Vector3(1, hordistance*2, verdistance*2))
        walls[3].setPosition(new Vector3(-hordistance, -hordistance, verdistance-1).addVector(pos)); walls[3].setScale(new Vector3(hordistance*2, hordistance*2, 1))
        walls[4].setPosition(new Vector3(-hordistance, hordistance-1, -verdistance).addVector(pos)); walls[4].setScale(new Vector3(hordistance*2, 1, verdistance*2))
        walls[5].setPosition(new Vector3(hordistance-1, -hordistance, -verdistance).addVector(pos)); walls[5].setScale(new Vector3(1, hordistance*2, verdistance*2))
        if (!player.raywalls) (async () => {
            walls = await player.newBricks(walls)
            player.raywalls = walls
        })()
    }
    else if (player.raywalls) {
        player.raywalls.forEach(wall => {wall.setScale(new Vector3(0, 0, 0))})
    }
    player.rayhordistance = hordistance
    player.rayverdistance = verdistance
}

Game.newBrick(new Brick(new Vector3(-2, -0.5, 10), new Vector3(4, 1, 1), "FF0000"))
Game.newBrick(new Brick(new Vector3(2, -0.5, 10), new Vector3(1, 1, 1), "AAAAAA"))


if (playersCollision) {
    Game.on("initialSpawn", (player) => {
        let brick = new Brick(new Vector3(1, 1, 1), new Vector3(2, 2, 5), "#f54242") //this is the brick that other players will collide with and shoot at
        player.setScaleWrappedColBrick = player.setScale //a wrapper is used to resize the brick whenever the player is resized
        player.setScale = (scale) => {
            brick.setScale(new Vector3(2, 2, 5).multiplyVector(scale))
            player.setScaleWrappedColBrick(scale)
        }
        brick.visibility = 0
        brick.name = "plrcolbox*"
        player.collisionBox = brick
        Game.newBrick(brick)
        

        let packettimes = 4 //idk when packets can not work, the packet is sent to the player 4 times up to 8 seconds after joining just to be safe
        let packetinterval = setInterval(() => {
            let brickPacket = new PacketBuilder("Brick") //this is the packet that makes the brick uncollide
            .write("uint32", brick.netId)
            .write("string", "collide")
            .write("bool", false)
            brickPacket.send(player.socket)
            packettimes--
            if (packettimes <= 0) clearInterval(packetinterval)
        }, 2000)            
        if (teamIgnorePlayersCollision) { //here it uses a wrapper to collide the brick for old teammates and uncollide for new teammates when a player switches team
            player.setTeamWrappedColBrick = player.setTeam
            player.setTeam = (team) => {
                let oldteam = player.team
                if (oldteam && oldteam != team) {
                    let oldteammates = oldteam.players
                    if (oldteammates && oldteammates.length) {
                        oldteammates.forEach(plr => {if (plr != player) {
                            new PacketBuilder("Brick")
                            .write("uint32", brick.netId)
                            .write("string", "collide")
                            .write("bool", true)
                            .send(plr.socket)
                            setTimeout(() => {
                                let teammateBrickPacket = new PacketBuilder("Brick")
                                .write("uint32", plr.collisionBox.netId)
                                .write("string", "collide")
                                .write("bool", true)
                                teammateBrickPacket.send(player.socket)
                            }, plr.collisionBox ? 0 : 1000)
                        }})
                    }
                }
                if (team) {
                    let teammates = team.players
                    if (teammates && teammates.length) {
                        teammates.forEach(plr => {if (plr != player) {
                            new PacketBuilder("Brick")
                            .write("uint32", brick.netId)
                            .write("string", "collide")
                            .write("bool", false)
                            .send(plr.socket)
                            setTimeout(() => {
                                let teammateBrickPacket = new PacketBuilder("Brick")
                                .write("uint32", plr.collisionBox.netId)
                                .write("string", "collide")
                                .write("bool", false)
                                teammateBrickPacket.send(player.socket)
                            }, plr.collisionBox ? 0 : 1000)
                        }})
                    }
                }
                
                player.setTeamWrappedColBrick(team)
            }

            if (player.team) setTimeout(() => {player.setTeam(player.team)}, 500) //incase the team was already set before the wrapper was made it calls it again with the wrapper
        }
        

        let lastposition = player.position.copy()
        player.on("moved", position => {
            if (position.x != lastposition.x || position.x != lastposition.y || position.z != lastposition.z) {
                let brickposition = new Vector3(position.x - brick.scale.x/2, position.y - brick.scale.y/2, position.z)
                
                //probably doesnt help much but packets are saved on those who dont experience collision anyway
                new PacketBuilder("Brick")
                .write("uint32", brick.netId)
                .write("string", "pos")
                .write("float", brickposition.x).write("float", brickposition.y).write("float", brickposition.z)
                .broadcastExcept((teamIgnorePlayersCollision && player.team) ? player.team.players : [player])
                
                lastposition = position
            }

        })
        player.on("died", () => {
            brick.setPosition(1000, 1000, 1000)
        })
        
    })
    Game.on("playerLeave", player => {
        if (player.collisionBox) player.collisionBox.destroy()
    })
}
if (disableAvatarTools) Game.on("playerJoin", (player) => {player.loadTool = false})


function Boom (gunSettings, location, attacker, hittablePlayers, hitNormal) { //location - center location of the explosion, strength - the size of the explosion outer brick in studs (stud^3), tag - the othertag field to be passed to the changeHealth function (for death messages and achievements)
    let diameter = gunSettings.explosionDiameter || 4, explosiveness = gunSettings.explosiveness || 0.5
    let damageMultiplier = gunSettings.explosionDamageMultiplier || 1, knockbackMultiplier = gunSettings.explosionKnockbackMultiplier || 1
    let innercolor = gunSettings.explosionInnerColor || "FF0000", outercolor = gunSettings.explosionOuterColor || "FFA500"
    let damageOffset = gunSettings.explosionDamageOffset || 0
    if (gunSettings.explosionVolume) diameter = Math.cbrt(gunSettings.explosionVolume)
    if (!diameter || !explosiveness || !damageMultiplier || !knockbackMultiplier) return
    if (typeof diameter == "string" && diameter.endsWith("volume")) diameter = Math.cbrt(Number.parseFloat(diameter.slice(0, diameter.length-6)))
    let explo = new Brick(location.copy().sub(diameter/4, diameter/4, diameter/4), new Vector3(diameter/2, diameter/2, diameter/2), innercolor)
    explo.name = "effect*InnerExplosion"
    explo.collision = false
    explo.visibility = explosiveness
    let blast = new Brick(location.copy().sub(diameter/2, diameter/2, diameter/2), new Vector3(diameter, diameter, diameter), outercolor)
    blast.name = "effect*OuterExplosion"
    blast.visibility = explo.visibility - 0.125
    blast.collision = false

    let sizeGrowth = new Vector3(diameter/4, diameter/4, diameter/4), sizeGrowthMove = new Vector3(-1/2, -1/2, -1/2)

    let a1
    if (hitNormal && gunSettings.explosionWallClipMode) { //this is the part that removes half of the explosion if it hit a wall
        a1 = hitNormal.x ? "x" : (hitNormal.y ? "y" : "z")
        a1sign = Math.sign(hitNormal[a1])
        explo.scale[a1] /= 2
        blast.scale[a1] /= 2
        if (hitNormal[a1] > 0) explo.position[a1] += explo.scale[a1]
        if (hitNormal[a1] > 0) blast.position[a1] += blast.scale[a1]

        sizeGrowth[a1] /= 2
        sizeGrowthMove[a1] = hitNormal[a1] > 0 ? 0 : -1
    }

    Game.newBrick(explo)
    Game.newBrick(blast)
    
    
    console.log(hittablePlayers.length)
    let knockInt = blast.setInterval(() => {
        damageMultiplier *= explo.visibility //the visibility is also a multiplier for the damage and knockback, and it makes the explosion cause a lot of damage when it hits and quickly lose strength until it disappears
        knockbackMultiplier *= explo.visibility
        for (let i = 0; i < hittablePlayers.length; i++) {
            let player = hittablePlayers[i]
            let halfheight = player.scale.z*5/2
            let dir = new Vector3(player.position.x - location.x, player.position.y - location.y, player.position.z + halfheight - location.z) //direction
            if (Math.abs(dir.z) <= halfheight) dir.z = 0 //the difference in the Z axis is only the difference from the feet if the explosion is below the player or the difference from the head if the explosion is above, otherwise the explosion and player will be considered parallel and there wont be a difference in the z axis
            else dir.z -= Math.sign(dir.z)*halfheight
            let distp2 = dir.x**2 + dir.y**2 + dir.z**2
            if (distp2 < ((diameter/2)**2)*1.5) {//the explosion effects everyone within a distance 1.5 times its radius
                distp2 += damageOffset //the significance of the distance from the explosion center is reduced by simply increasing the calculated distance from it for all players equally
                let multip = 2*diameter/distp2
                dir.multiply(multip*knockbackMultiplier, multip*knockbackMultiplier, multip*knockbackMultiplier)
                let damage = multip * diameter * damageMultiplier //the most logical explosion damage by distance algorithm would probably be arctan(dist)/PI but 1/dist^2 is easier
                
                player.position.addVector(dir)

                player.setHealth(player.health - damage)
                if (player.alive) player.setPosition(player.position)
                else if(RemoveFromArray(player, hittablePlayers)) {
                    i-- //after removing a player from the array, the index must be decremented by one so that the player that moved to this index isnt skipped over
                    if (!player.alive) {
                        Game.messageAll(`\\c6${attacker.username} killed ${player.username ?? player.name} with a ${gunSettings.toolName}`)
                        if (gunSettings.deathAnimation) gunSettings.deathAnimation(player, ...gunSettings.deathAnimationParameters)
                        attacker.setScore(attacker.score+1)
                    }
                }
            }
        }
        if (explo.visibility < 0.1) {
            explo.destroy()
            blast.destroy()
        }
        else {
            explo.setVisibility(explo.visibility - 0.125)
            blast.setVisibility(explo.visibility - 0.125)
            sizeGrowth.multiply(explo.visibility, explo.visibility, explo.visibility)
            explo.setScale(explo.scale.addVector(sizeGrowth))
            explo.setPosition(explo.position.addVector(sizeGrowth.copy().multiplyVector(sizeGrowthMove)))
            blast.setScale(blast.scale.addVector(sizeGrowth))
            blast.setPosition(blast.position.addVector(sizeGrowth.copy().multiplyVector(sizeGrowthMove)))
            diameter = blast.scale.x
        }
        
        
    },50)
}




function RemoveFromArray(elem, array) {
    let ind = array.indexOf(elem)
    if (ind == -1) return false
    array.splice(ind, 1)
    return true
}







function AmmoPack(brick, guns, size) { //brick is the brick that will act as the ammo pack. guns is either a reference to a single gun, an array of guns, or a false value in which the ammo pack will work on any gun. size is the multiplier that determines how much ammo is added to each gun together with gunSettings.AmmoPerPack (for example 8 ammo per pack and a size 2 pack grants 16 ammo)
    if (size < 0) console.log("bruh you set ammo pack to negative size")
    if (size == 0) brick.touching(brick.destroy)
    else brick.touching(player => {
        player.inventory.forEach(tool => {
            let gunSettings = tool.gunSettings
            if (gunSettings?.limitedAmmo && (!guns || guns == gunSettings || guns.includes?.(gunSettings))) {
                let ammoforgun = gunSettings.AmmoPerPack
                if (ammoforgun && !isNaN(ammoforgun) && ammoforgun >= 0) {
                    if (ammoforgun > 0) {
                        player[gunSettings.ID + "*Ammo"] += Math.round(ammoforgun * size)
                        showAmmo(gunSettings, player)
                    }
                }
                else console.log('ERROR: gun "' + gunSettings.toolName + '" must have a AmmoPerPack value set to a positive number, in order to be used in an AmmoPack. you can set AmmoPerPack value to 0 to skip over this gun without manually setting which guns to add ammo to')
            }
        })
        brick.destroy()
        
    })
}
function SingleGunAmmoPack(brick, guns, size) {//this version of the ammo pack only grants ammo to the gun that the player currently has equipped
    if (size < 0) console.log("bruh you set ammo pack to negative size")
    if (size == 0) brick.touching(brick.destroy)
    else brick.touching(player => {
        let gunSettings = player.toolEquipped?.gunSettings
        if (gunSettings?.limitedAmmo && (!guns || guns == gunSettings || guns.includes?.(gunSettings))) {
            let ammoforgun = gunSettings.AmmoPerPack
            if (ammoforgun && !isNaN(ammoforgun) && ammoforgun >= 0) {
                if (ammoforgun > 0) {
                    player[gunSettings.ID + "*Ammo"] += Math.round(ammoforgun * size)
                    showAmmo(gunSettings, player)
                }
            }
            else console.log('ERROR: gun "' + gunSettings.toolName + '" must have a AmmoPerPack value set to a positive number, in order to be used in an AmmoPack')
        }
        brick.destroy()
    })
} //both of these are untested, submit any bugs that may occur




































