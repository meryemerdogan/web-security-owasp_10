[English version](README.md)

## Broken Access Control

Access control, bir web uygulamasında kullanıcının neyi **görebileceğini** / **düzenleyebileceğini** / **silebileceğini** belirleyen yapıdır.

Bu kontroller doğru uygulanmadığında **Broken Access Control** zafiyeti ortaya çıkar. Bu durum saldırganların erişmemesi gereken işlemleri yapmasına izin verir.

OWASP’e göre en yaygın web application zafiyetlerinden biridir.

---

### Possible Results
- Saldırganlar verileri değiştirebilir veya silebilir  
- Saldırganlar admin yetkileri kazanabilir  
- Saldırganlar sadece adminlere veya belirli kullanıcılara açık olan gizli endpoint’lere erişebilir  
- Saldırganlar object ownership (sahiplik) ele geçirebilir  

---

### Proje Yapısı
- `/vulnerable` bilerek güvenlik açığı içeren örnekler  
- `/secure` uygulamanın güvenli sürümünü içerir

---

## #1 IDOR: Insecure Direct Object Reference
**Problem:** Dokümanlara sadece ID bilinerek erişilebiliyor (ownership verification yok).  
Herhangi bir kullanıcı dokuman ID’sini bilirse gizli belgelere erişebilir.

[Kodu incele](./vulnerable/routes/docs.js)

---

## #2 Vertical Privilege Escalation
**Problem:** Admin kontrolu yok. Login olmuş herhangi bir kullanici admin verisine erişebilir.

[Kodu incele](./vulnerable/routes/admin.js)

---

## #3 Missing Tenant / Workspace Membership Check
**Problem:** Sistem, kullanıcının workspace üyesi olduğunu kontrol etmeyi unutuyor ve tenant membership kontrolünün zaten yapıldığını **varsayıyor**.

[Kodu incele](./vulnerable/routes/workspaces.js)

---

## #4 Mass Assignment (Unsafe Object Update)
**Problem:** User objesi doğrudan şu şekilde güncelleniyor:

`Object.assign(user, req.body)`

Bu sayede kullanıcı normalde değiştirememesi gereken alanları (role veya isAdmin gibi) değiştirebilir.

[Kodu incele](./vulnerable/routes/users.js)

---

## #5 Ownership Takeover (Object Reassignment)
**Problem:** Project objesi kullanıcı girdisi ile overwrite ediliyor:

`Object.assign(project, req.body)`

Bu da ownership (sahiplik) veya kritik proje verisinin değiştirilebilir olmasına neden oluyor.

[Kodu incele](./vulnerable/routes/projects.js)

---

### References
1. https://portswigger.net/web-security/access-control/idor  
2. https://infosecwriteups.com/how-i-made-vertical-privilege-escalation-through-request-manipulation-98cfef624740  
3. https://krontech.com/privilege-escalation-explained-types-cases-and-prevention  
4. https://medium.com/@afi0pchik/finding-broken-access-control-in-multi-tenant-systems-2fa95ee0dfa6  
5. https://outpost24.com/blog/broken-access-control-and-scanners 
