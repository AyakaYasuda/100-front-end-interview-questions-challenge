/*

What are HTTP verbs?
- The most commonly used HTTP verbs are POST, GET, PUT, PATCH, and DELETE.
- These correspond to create, read, update and delete operations respectively.
- The POST verb is used to create new resource. It returns 201 status on successful creation.
- The GET verb is used to read a representation of a resource. It returns XML or JSON data or 200 status code.
  In an error case, it often returns 404 status code, or 400(NOT FOUND) status code(BAD REQUEST).
- The PUT verb is used to update a representation of the original resource. It returns 200 status code or 204 status code on successful update.
- The PUT verb can also be used to create new resource in case the resource ID is chosen by the client.
- The PATCH verb is used to update resource, but it's different to the PUT verb as it modifies part of the existing resource instead of replacing all resource.
- The DELETE verb is used to delete resource identified by a URL. It returns 200 status code.

*/

/* eslint-disable no-undef */
async function getNotes() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await response.json();
  console.log('Get', json);
}

// getNotes();

async function postNotes() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Dylan',
      body: 'Israel',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const json = await response.json();

  console.log('Post', json);
}

// postNotes();

async function putNotes() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'Dylan',
      body: 'Israel',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const json = await response.json();

  console.log('Put', json);
}

putNotes();

async function deleteNotes() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });

  console.log('Delete', response);
}
