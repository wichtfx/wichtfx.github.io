---
layout: post
title: Choosing a Phone for Privacy in 2025
date: 2025-08-03 18:00:00
description: Evaluating modern mobile hardware for privacy, support, and long-term usability.
tags: privacy phones android ios calyxos grapheneos pixel
categories: analysis
---

*I used a Pixel 4a for years, and it served me well—reliable performance, consistent updates, and seamless compatibility with [CalyxOS](https://calyxos.org). But with the 5.17.1 release, official support finally ended, leaving me without security patches or system updates. While the hardware continues to function perfectly, a phone without ongoing software support can no longer be considered trustworthy for handling sensitive data. This means it is time to find a replacement—one that can still be properly secured, modified, and used for private communication.*

*This search matters more than it might initially seem. My phone serves as the gateway to private communications, handles two-factor authentication for critical accounts, stores personal data, and mediates daily interactions with countless online services. Privacy-focused messaging apps like [Signal](https://signal.org) are only as secure as the underlying system they run on, which means that trust must extend throughout the entire technology stack—from the boot process and firmware up through the operating system and application environment.*

*[Android](https://android.com) once offered remarkable flexibility in this regard, allowing users to carefully select hardware, unlock bootloaders, and install hardened operating systems free from proprietary surveillance components. However, this freedom has been steadily eroding with each new hardware generation. [Verified Boot](https://source.android.com/docs/security/features/verifiedboot) mechanisms have become increasingly difficult to bypass, closed-source firmware components have grown more integral to basic functionality, and bootloader unlocking—once a given for enthusiast devices—is no longer guaranteed. The entire landscape has shifted dramatically over the past few years, making thoughtful device selection more critical than ever for anyone serious about mobile privacy.*

---

## The current state of privacy phones

Before diving into specific options, it is worth understanding what we are looking for in a privacy-focused device: open bootloaders, regular security updates, compatibility with hardened operating systems, and long-term community support. The pool of devices meeting these criteria has shrunk considerably.

## Pixel devices

Despite being made by Google—a company whose business model relies on data collection—Pixel phones remain the most widely supported option for running hardened Android-based systems. This irony isn't lost on privacy advocates, but these devices offer the best combination of verified boot, regular security patches, and compatibility with custom ROMs that can strip out Google's surveillance infrastructure.

The Pixel ecosystem has long been the foundation for two major privacy-focused Android distributions: CalyxOS and GrapheneOS. However, recent events have dramatically altered this landscape, with one project thriving while the other faces an uncertain future.

### CalyxOS: a project in crisis

[CalyxOS](https://calyxos.org) had carved out an important niche in the privacy ecosystem. While [GrapheneOS](https://grapheneos.org) focused on maximum security hardening, CalyxOS provided an accessible, user-friendly alternative to stock Android. It made privacy features easier to adopt, smoothing the transition for users unfamiliar with hardened systems. For many, it served as the perfect middle ground between convenience and privacy.

However, 2025 brought unprecedented challenges. The [Android 16](https://developer.android.com/about/versions/16) release marked a significant departure from Google's usual practices: the company published only platform code, deliberately omitting device-specific source trees for Pixel phones. This was not just an oversight—it was a fundamental change that disrupted the standard workflow for custom ROM developers.

CalyxOS could not adapt quickly enough. In response to these changes, the project made the drastic decision to remove installation images for all supported devices. Users were informed that future builds, if they ever returned, would require complete reflashing due to changes in signing keys—effectively abandoning existing users.

The situation deteriorated further with significant personnel changes. Key developers, including Chirayu and project founder Nick Merrill, [departed under unclear circumstances](https://calyxos.org/news/2025/08/01/a-letter-to-our-community/). Since then, the project has provided no technical roadmap, no timeline for recovery, and no clear communication about its future direction. The combination of missing infrastructure, revoked signing keys, and leadership exodus has left the CalyxOS community in limbo.

What made CalyxOS valuable—its role as an accessible bridge between stock Android and hardened systems—also made its collapse particularly damaging. Many users who had successfully transitioned to privacy-focused mobile computing through CalyxOS now find themselves without a supported path forward.

### GrapheneOS: adaptation and resilience

While CalyxOS struggled with Google's changes, [GrapheneOS](https://grapheneos.org) demonstrated remarkable technical agility. Rather than being paralyzed by the missing Android 16 device trees, the development team found a creative solution. On July 9, 2025, they released a stable build based on Android 16—a feat many thought impossible given Google's constraints.

The technical approach was ingenious: developers backported Android 16 firmware components into an [Android 15 QPR2](https://developer.android.com/about/versions/15/qpr) base, then methodically completed the full migration to Android 16. This was not just a stopgap solution—the release included all standard GrapheneOS security features and hardening patches, including a fix for the recently discovered [TapTrap vulnerability](https://www.taptrap.org/) that Google has yet to address in the upstream Android codebase.

This response highlighted GrapheneOS's core philosophy: prioritizing security and user control over convenience or vendor relations. The project maintains support for [Pixel 6](https://store.google.com/product/pixel_6) and newer devices, offering strong system hardening, [reproducible builds](https://grapheneos.org/build), and an active development cycle that responds quickly to emerging threats.

Installation remains straightforward through the [WebUSB-based installer](https://grapheneos.org/install/web), and [documentation](https://grapheneos.org/usage) is actively maintained. Unlike CalyxOS, which sought to make privacy more approachable by maintaining some conveniences, GrapheneOS has always been uncompromising in its pursuit of security—even when that means sacrificing ease of use.

For users who require the highest level of assurance on a mobile device, GrapheneOS has proven itself to be not just technically capable, but organizationally resilient. In a landscape where even well-intentioned projects can disappear overnight, this stability is invaluable.

## Beyond Android: alternative approaches

While Android-based solutions dominate the privacy phone discussion, they are not the only options available. Each alternative comes with its own trade-offs between security, usability, and philosophical alignment.

### iPhones: the closed but consistent option

[Apple devices](https://www.apple.com/iphone/) represent a fundamentally different approach to mobile privacy. Rather than offering user control and transparency, [iOS](https://www.apple.com/ios/) relies on what might be called "privacy through policy"—trusting Apple to implement strong defaults and maintain them over time.

The strengths are undeniable: consistent security updates across a wide range of devices, stable performance, tight integration between hardware and software, and relatively strong data protection defaults. iOS sandboxing is enforced at the system level, and Apple has made high-profile stands against government surveillance requests.

However, this approach requires complete trust in Apple as a company and in their commitment to user privacy. The iOS platform remains fundamentally closed—applications must be sourced through the [App Store](https://apps.apple.com/), the operating system cannot be independently audited, and hardware-level modifications are impossible. Users have no way to verify Apple's privacy claims or adapt the system to their specific threat models.

This makes iPhones suitable for users who trust Apple's implementation but problematic for those who require verifiable privacy or who operate under threat models that include state-level adversaries with potential influence over large corporations.

### Linux-based phones: the open but impractical future

At the other extreme are devices like the [Librem 5](https://puri.sm/products/librem-5/) and [PinePhone](https://www.pine64.org/pinephone/), which offer complete transparency and user control. These phones support fully open-source operating systems, user-replaceable components, and complete verifiability of the software stack. From a philosophical standpoint, they represent the ideal of what a privacy-respecting phone could be.

Unfortunately, they are not yet ready for mainstream adoption. Battery life remains severely limited—often lasting less than a few hours under normal use. Core phone functionality like cellular connectivity and GPS can be unreliable. The application ecosystems are sparse, lacking many tools that users depend on for daily communication and productivity.

These devices serve an important role as research platforms and proof-of-concept implementations, demonstrating that alternative approaches are technically feasible. However, they are not practical substitutes for users who need reliable daily communication tools. They represent the future potential of mobile privacy, not its present reality.

## The narrowing path forward

The analysis above reveals an uncomfortable truth: the set of viable privacy-respecting mobile devices is shrinking rapidly. Each passing year brings new constraints, whether technical, organizational, or regulatory.

[Pixel phones](https://store.google.com/category/phones), particularly newer models running [GrapheneOS](https://grapheneos.org), still offer the strongest combination of security features, modifiability, and long-term support available today. However, this solution carries inherent risks. Relying on hardware produced by a single company—especially one whose business model conflicts with user privacy—creates dangerous dependencies.

Recent changes in the Android ecosystem demonstrate how quickly the landscape can shift. Enforced system updates, performance throttling of older devices, and the deliberate withholding of source code show that support terms and core functionality can change without warning. What works today may not work tomorrow.

The collapse of CalyxOS illustrates another vulnerability: even well-intentioned privacy projects can fail due to technical challenges, organizational issues, or developer burnout. The open-source model provides some protection through forkability and community maintenance, but it doesn't guarantee continuity.

GrapheneOS has proven more resilient, but it operates under the same fundamental constraints. Its technical excellence and organizational stability make it the most credible option for users requiring a secure and modifiable mobile system in 2025, but it cannot solve the broader problems of platform consolidation and vendor control.

## Conclusion

Platform control continues to erode. Hardware constraints multiply with each generation. The space for private, verifiable, and usable mobile computing shrinks year by year—but it has not yet vanished entirely.

For users who need a privacy-respecting phone today, the path is clear: a recent [Pixel device](https://store.google.com/category/phones) running [GrapheneOS](https://grapheneos.org) offers the best available combination of security, usability, and long-term viability. This solution is not perfect, but it is pragmatic given current constraints.

The longer-term question remains open: can more open, community-driven alternatives mature quickly enough to provide genuine choice before the current options disappear? The fate of projects like CalyxOS suggests this transition will be neither smooth nor guaranteed.

What is certain is that the window for building and maintaining independent mobile platforms is closing. Those who value digital privacy and autonomy must act now, while viable options still exist, and must support the development of alternatives before they are desperately needed.

The choice of a privacy phone in 2025 is ultimately a choice about which risks to accept. Perfect solutions do not exist, but informed compromises still do—for now.
