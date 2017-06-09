var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];


const fields = document.querySelector('.fields')

for (i = 0; i < formData.length; i++){

  if (formData[i].type === 'select'){

    let select = document.createElement('select')
    select.placeholder = formData[i].label
    select.id = formData[i].id

    for (n = 0; n < formData[i].options.length; n++){
      let option = document.createElement('option')

      option.textContent = formData[i].options[n].label
      option.value = formData[i].options[n].value

      select.appendChild(option)
    }
    fields.appendChild(select)

  } else {

    let input = document.createElement('input')

    input.type = formData[i].type
    input.placeholder = formData[i].label
    input.id = formData[i].id
    input.id = formData[i].icon

    fields.appendChild(input)
  }

}

const textArea = document.createElement('TEXTAREA')
textArea.setAttribute('placeholder', 'Your Comment')
fields.appendChild(textArea)
