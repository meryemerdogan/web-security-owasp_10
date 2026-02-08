[Turkce icin tiklayin](README_tr.md)
## Broken Access Control

Access control is the part of a web application that decides what a user is allowed to **see** / **edit** / **delete**.

When these permission checks are not applied correctly, **Broken Access Control** occurs. This allows attackers to perform actions they should not have access to.

It is one of the most common web application weaknesses according to OWASP.

---

### Possible Results
- Attackers can modify or delete data  
- Attackers can gain admin privileges  
- Attackers can access hidden endpoints only meant for admins or specific users  
- Attackers can take over ownership of objects  

---

### Repository Structure
- `/vulnerable` contains the intentionally vulnerable version of the app  
- `/secure` contains the secure version  

---

## #1 IDOR: Insecure Direct Object Reference
**Problem:** Documents can be accessed just by knowing the ID (no ownership verification).  
Any user can read secret documents if they know the document ID.

[Click to view the code](./vulnerable/routes/docs.js)

---

## #2 Vertical Privilege Escalation
**Problem:** No admin validation. Any logged-in user can access admin data.

[Click to view the code](./vulnerable/routes/admin.js)

---

## #3 Missing Tenant / Workspace Membership Check
**Problem:** The system **assumes** tenant membership was already checked.

[Click to view the code](./vulnerable/routes/workspaces.js)

---

## #4 Mass Assignment (Unsafe Object Update)
**Problem:** User object is updated directly using:

`Object.assign(user, req.body)`

This makes protected fields changeable.

[Click to view the code](./vulnerable/routes/users.js)

---

## #5 Ownership Takeover (Object Reassignment)
**Problem:** Project object is overwritten with user input:

`Object.assign(project, req.body)`

Ownership or critical project data becomes changeable.
[Click to view the code](./vulnerable/routes/projects.js)

---


### References
1. https://portswigger.net/web-security/access-control/idor  
2. https://infosecwriteups.com/how-i-made-vertical-privilege-escalation-through-request-manipulation-98cfef624740  
3. https://krontech.com/privilege-escalation-explained-types-cases-and-prevention  
4. https://medium.com/@afi0pchik/finding-broken-access-control-in-multi-tenant-systems-2fa95ee0dfa6  
5. https://outpost24.com/blog/broken-access-control-and-scanners
