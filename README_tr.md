[English Version](README.md)
# Web Güvenliği & OWASP Top 10
Bu proje OWASP Top 10 ile ilgili pratik notlar ve örnekler içermektedir.

Bu projenin amacı yaygın güvenlik açıklarının basit ve uygulamalı bir şekilde nasıl ortaya çıktıklarını ve neden önemli olduklarını göstermektir.

---

## OWASP Top 10

OWASP Top 10, modern web uygulamalarındaki en önemli güvenlik risklerini listeleyen, dünya çapında tanınan bir kaynaktır.  
Yaygın risk örnekleri şunlardır:

- Bozuk Erişim Kontrolü (Broken Access Control)  
- Enjeksiyon Saldırıları (Injection Attacks)  
- Siteler Arası Betik Çalıştırma (Cross-Site Scripting - XSS)  
- Güvenlik Yanlış Yapılandırması (Security Misconfiguration)  
- Hassas Veri Açığı (Sensitive Data Exposure)  

Daha fazla bilgi: https://owasp.org/www-project-top-ten/

---

## Proje Yapısı

Bu projedeki her klasör, OWASP Top 10 kategorilerinden birine odaklanır.

Örnek:

- **A01-broken-access-control/**  
  Yetkisiz kullanıcıların kısıtlamaları nasıl aşabildiğini gösterir.

Her bölümde:

- Güvenlik açığının kısa bir açıklaması (Türkçe ve İngilizce)
- Riski içeren örnek bir proje
- Aynı projenin güvenli hale getirilmiş sürümü bulunmaktadır.
