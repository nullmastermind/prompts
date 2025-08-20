# Windows
Manual Installation
Double-click the P12 file to start the import wizard.
Select a certificate store location. This determines who will trust the certificate – only the current Windows user or everyone on the machine. Click Next.
Click Next again.
Leave Password blank and click Next.
Select Place all certificates in the following store, then click Browse, and select Trusted Root Certification Authorities.
Click OK and Next.
Click Finish.
Click Yes to confirm the warning dialog.
Automated Installation
Run certutil.exe -addstore root mitmproxy-ca-cert.cer (details).

# Linux
Ubuntu/Debian
mv mitmproxy-ca-cert.pem /usr/local/share/ca-certificates/mitmproxy.crt
sudo update-ca-certificates
Fedora
mv mitmproxy-ca-cert.pem /etc/pki/ca-trust/source/anchors/
sudo update-ca-trust
Arch Linux
sudo trust anchor --store mitmproxy-ca-cert.pem

# macOS
Manual Installation
Double-click the PEM file to open the Keychain Access application.
Locate the new certificate "mitmproxy" in the list and double-click it.
Change Secure Socket Layer (SSL) to Always Trust.
Close the dialog window and enter your password if prompted.
Automated Installation
sudo security add-trusted-cert -d -p ssl -p basic -k /Library/Keychains/System.keychain mitmproxy-ca-cert.pem