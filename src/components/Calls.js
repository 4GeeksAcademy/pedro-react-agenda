// Refresh contact list
export function refreshContactList(setcontactList) {
  fetch(`https://playground.4geeks.com/contact/agendas`, {
    method: "GET",
  }).then((resp) => {
    resp.json().then((resp) => {
      setcontactList(resp.agendas);
    });
  });
}

// Delete contact list
export function deleteContactList(slug, contactList, setcontactList) {
  fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
    method: "DELETE",
  });
  setcontactList(contactList.filter((element) => element.slug !== slug));
}

// Create contact list
export function createContactList(text, setcontactList) {
  fetch(`https://playground.4geeks.com/contact/agendas/${text}`, {
    method: "POST",
  }).then(() => {
    refreshContactList(setcontactList);
  });
}
