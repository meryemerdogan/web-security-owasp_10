[English version](README.md)

## Broken Access Control

Access control, bir web uygulamasında kullanıcının neyi **görebileceğini** / **düzenleyebileceğini** / **silebileceğini** belirleyen yapıdır.

Bu permission kontrolleri doğru şekilde uygulanmadığında **Broken Access Control** ortaya çıkar. Bu durum saldırganların erişmemesi gereken işlemleri yapmasına izin verir.

OWASP’e göre en yaygın web application zafiyetlerinden biridir.

---

### Possible Results
- Saldırganlar verileri değiştirebilir veya silebilir  
- Saldırganlar admin yetkileri kazanabilir  
- Saldırganlar sadece adminlere veya belirli kullanıcılara açık olan gizli endpoint’lere erişebilir  
- Saldırganlar object ownership ele geçirebilir  

---

### Repository Structure
- `/vulnerable` uygulamanın kasıtlı olarak vulnerable sürümünü içerir  
- `/secure` uygulamanın secure sürümünü içerir  

---

## #1 IDOR: Insecure Direct Object Reference
**Problem:** Dokümanlara sadece ID bilinerek erişilebiliyor (ownership verification yok).  
Herhangi bir kullanıcı document ID’sini bilirse gizli belgelere erişebilir.

[Click to view the code](./vulnerable/routes/docs.js)

---

## #2 Vertical Privilege Escalation
**Problem:** Admin validation yok. Login olmuş herhangi bir user admin data’ya erişebilir.

[Click to view the code](./vulnerable/routes/admin.js)

---

## #3 Missing Tenant / Workspace Membership Check
**Problem:** Sistem tenant membership kontrolünün zaten yapıldığını **assume ediyor**.

[Click to view the code](./vulnerable/routes/workspaces.js)

---

## #4 Mass Assignment (Unsafe Object Update)
**Problem:** User object doğrudan şu şekilde update ediliyor:

`Object.assign(user, req.body)`

Bu durum protected fields değiştirilebilir olmasına yol açar.

[Click to view the code](./vulnerable/routes/users.js)

---

## #5 Ownership Takeover (Object Reassignment)
**Problem:** Project object user input ile overwrite ediliyor:

`Object.assign(project, req.body)`

Bu da ownership veya kritik project data’nın değiştirilebilir olmasına neden olur.

[Click to view the code](./vulnerable/routes/projects.js)

---

### References
1. https://portswigger.net/web-security/access-control/idor  
2. https://infosecwriteups.com/how-i-made-vertical-privilege-escalation-through-request-manipulation-98cfef624740  
3. https://krontech.com/privilege-escalation-explained-types-cases-and-prevention  
4. https://medium.com/@afi0pchik/finding-broken-access-control-in-multi-tenant-systems-2fa95ee0dfa6  
5. https://outpost24.com/blog/broken-access-control-and-scanners/?utm_source=chatgpt.com  
