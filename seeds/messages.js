
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(() => {
      return knex('messages').insert([
        {
          "id": 0,
          "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
          "body": "Well I am going to do it anyways!",
          "read": false,
          "starred": false,
          "labels": ["dev", "personal"]
        },
        {
          "id": 1,
          "subject": "Connecting the system won't do anything, we need to input the mobile AI panel!",
          "body": "Don't teach the AI too much",
          "read": false,
          "starred": false,
          "labels": []
        },
        {
          "id": 2,
          "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
          "body": "That is a great solution",
          "read": false,
          "starred": false,
          "labels": ["dev"]
        },
        {
          "id": 3,
          "subject": "We need to program the primary TCP hard drive!",
          "body": "Do it now!",
          "read": false,
          "starred": false,
          "labels": ["gschool"]
        },
        {
          "id": 4,
          "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
          "body": "But at what cost!?",
          "read": false,
          "starred": false,
          "labels": ["personal"]
        },
        {
          "id": 5,
          "subject": "We need to back up the wireless GB driver!",
          "body": "We don't want to lose all our data",
          "read": false,
          "starred": false,
          "labels": []
        },
        {
          "id": 6,
          "subject": "We need to index the mobile PCI bus!",
          "body": "There is so much urgency!",
          "read": false,
          "starred": false,
          "labels": ["dev", "personal"]
        },
        {
          "id": 7,
          "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
          "body": "Less security is always better",
          "read": false,
          "starred": false,
          "labels": []
        }
      ])
    }).then(function(){
      return knex.raw("SELECT setval('messages_id_seq', (SELECT MAX(id) FROM messages))")
    });
};
