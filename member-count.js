module.exports = (client) => {  
  const countChannel = '797183228137570305'
   const updateMembers = guild => {
       const channel = guild.channels.cache.get(countChannel)
       channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
   }

   const guild = client.guilds.cache.get('390984143892119552')
   updateMembers(guild)
}