# mitmproxy Certificate Installation Guide

This guide provides instructions for downloading and installing mitmproxy certificates on different operating systems to enable HTTPS traffic interception.

## Table of Contents

- [Downloading the Certificate](#downloading-the-certificate)
- [Windows](#windows)
- [Linux](#linux)
- [macOS](#macos)

---

## Downloading the Certificate

Before installing the certificate, you need to download the appropriate certificate file for your operating system.

### Certificate Files Available

The certificates are available in the GitHub repository at:
**https://github.com/nullmastermind/prompts/tree/master/proxy/certificate**

### Download Methods

#### Method 1: Direct Download from GitHub

1. **Navigate to the certificate directory**
   - Go to: https://github.com/nullmastermind/prompts/tree/master/proxy/certificate

2. **Select the appropriate certificate file**
   - For **Windows**: Download `mitmproxy-ca-cert.p12` or `mitmproxy-ca-cert.cer`
   - For **Linux/macOS**: Download `mitmproxy-ca-cert.pem`

3. **Download the file**
   - Click on the certificate file name
   - Click the **"Download"** button or **"Raw"** button
   - Save the file to your local machine

#### Method 2: Download via Command Line

**For Linux/macOS:**

```bash
# Download PEM certificate
curl -O https://raw.githubusercontent.com/nullmastermind/prompts/master/proxy/certificate/mitmproxy-ca-cert.pem

# Or using wget
wget https://raw.githubusercontent.com/nullmastermind/prompts/master/proxy/certificate/mitmproxy-ca-cert.pem
```

**For Windows (PowerShell):**

```powershell
# Download P12 certificate
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/nullmastermind/prompts/master/proxy/certificate/mitmproxy-ca-cert.p12" -OutFile "mitmproxy-ca-cert.p12"

# Or download CER certificate
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/nullmastermind/prompts/master/proxy/certificate/mitmproxy-ca-cert.cer" -OutFile "mitmproxy-ca-cert.cer"
```

### Certificate File Types

- **`.p12`** - PKCS#12 format, commonly used on Windows
- **`.cer`** - Certificate format, alternative for Windows
- **`.pem`** - Privacy-Enhanced Mail format, used on Linux and macOS

---

## Windows

### Manual Installation

1. **Start the import wizard**
   - Double-click the P12 file to start the import wizard

2. **Select certificate store location**
   - Select a certificate store location (this determines who will trust the certificate – only the current Windows user or everyone on the machine)
   - Click **Next**

3. **Continue through wizard**
   - Click **Next** again

4. **Set password**
   - Leave **Password** blank
   - Click **Next**

5. **Choose certificate store**
   - Select **"Place all certificates in the following store"**
   - Click **Browse**
   - Select **"Trusted Root Certification Authorities"**

6. **Complete installation**
   - Click **OK** and **Next**
   - Click **Finish**
   - Click **Yes** to confirm the warning dialog

### Automated Installation

Run the following command in an elevated command prompt:

```cmd
certutil.exe -addstore root mitmproxy-ca-cert.cer
```

---

## Linux

### Ubuntu/Debian

```bash
mv mitmproxy-ca-cert.pem /usr/local/share/ca-certificates/mitmproxy.crt
sudo update-ca-certificates
```

### Fedora

```bash
mv mitmproxy-ca-cert.pem /etc/pki/ca-trust/source/anchors/
sudo update-ca-trust
```

### Arch Linux

```bash
sudo trust anchor --store mitmproxy-ca-cert.pem
```

---

## macOS

### Manual Installation

1. **Open Keychain Access**
   - Double-click the PEM file to open the Keychain Access application

2. **Locate the certificate**
   - Find the new certificate "mitmproxy" in the list
   - Double-click it

3. **Configure trust settings**
   - Change **Secure Socket Layer (SSL)** to **"Always Trust"**

4. **Save changes**
   - Close the dialog window
   - Enter your password if prompted

### Automated Installation

Run the following command in Terminal:

```bash
sudo security add-trusted-cert -d -p ssl -p basic -k /Library/Keychains/System.keychain mitmproxy-ca-cert.pem
```

---

## Notes

- Make sure you have the appropriate certificate file for your installation method (P12, PEM, or CER)
- Administrative privileges may be required for system-wide certificate installation
- After installation, you may need to restart your browser or applications to recognize the new certificate
