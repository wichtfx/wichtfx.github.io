---
layout: post
title: Choosing a Phone for Privacy in 2025
date: 2025-08-03 18:00:00
description: Evaluating modern mobile hardware for privacy, support, and long-term usability.
tags: privacy phones android ios calyxos grapheneos pixel
categories: analysis
---

*I used a Pixel 4a for years. It was reliable, well-supported, and ran CalyxOS without issue. But with the 5.17.1 release, support officially ended. No more updates, no more security patches. The hardware still works, but without software support, it can no longer be trusted. So I need to find a new phone—one that can still be secured, modified, and used privately.
This matters. My phone handles private communication, authentication, access to personal data, and day-to-day interaction with services. Messaging apps like Signal only make sense if the system they run on can be trusted. That trust must extend to the entire stack: boot process, firmware, operating system, and application environment. Android used to offer flexibility. It was possible to select hardware, unlock the bootloader, and run a hardened system without proprietary services. This has become more difficult. Each hardware generation adds constraints. Verified Boot becomes harder to bypass. Closed firmware components grow more essential. Bootloader unlocking is no longer guaranteed. I review replacement candidates below.*

---

## Pixel devices

Pixel phones remain the most widely supported option for running hardened Android-based systems. These devices combine verified boot, regular security patches, and compatibility with most Android applications. But changes to update policies, reduced source availability, and diverging project trajectories now create a more fragmented landscape.

### CalyxOS

CalyxOS had long provided an accessible, user-friendly alternative to stock Android. It made privacy features easier to adopt, smoothing the transition for users unfamiliar with hardened systems. But in 2025, its future became uncertain.

The Android 16 release broke with precedent: Google published only platform code, omitting device-specific source for Pixel phones. This disrupted the standard CalyxOS workflow. In the aftermath, CalyxOS removed installation images for all devices. Users were told that future builds, if they return, would require full reflashing due to changes in signing keys.

Key developers, including Chirayu and project founder Nick Merrill, departed. No technical roadmap has been provided. The project’s silence, combined with unexplained changes and revoked infrastructure, has left the community in the dark. CalyxOS was an important bridge for many users, but it is no longer a reliable option.

### GrapheneOS

While others stalled, GrapheneOS adapted. On July 9, it released a stable build based on Android 16, despite Google's missing device trees. Developers backported Android 16 firmware into an Android 15 QPR2 base, then completed the full migration. The release includes all standard GrapheneOS features and patches, including a fix for the TapTrap vulnerability, which Google has yet to address upstream.

GrapheneOS supports Pixel 6 and newer devices. It offers strong hardening, reproducible builds, and an active development cycle. Installation remains accessible via WebUSB, and documentation is maintained. Unlike CalyxOS, GrapheneOS prioritizes robust isolation and attack surface reduction over convenience. For users who require high assurance on a mobile device, it remains the strongest option available.


## iPhones

Apple devices offer consistent updates, stable performance, and a tightly integrated software stack. Defaults for data protection are relatively strong, and sandboxing is enforced at the system level.

However, iOS remains a closed platform. Application sources are restricted, the OS cannot be independently audited, and hardware-level changes are not permitted. Trust in the system relies entirely on Apple’s policies, which may shift over time.

## Linux-based phones

Phones such as the Librem 5 and PinePhone support full verifiability, user-replaceable components, and open-source operating systems. These devices prioritize user control and long-term transparency.

They are not yet practical for general-purpose use. Battery life is limited, core phone functionality is incomplete, and app ecosystems are sparse. They are promising research platforms, but not substitutes for mainstream smartphones.

## Outlook

The set of viable privacy-respecting mobile devices is narrowing. Pixel phones, especially newer models, still offer a strong combination of security features, modifiability, and long-term support—particularly when paired with GrapheneOS. Yet, relying on a product controlled by a single company brings risks. Recent changes—such as enforced updates and performance throttling—show that support terms or core functionality can shift without notice.

CalyxOS, once an accessible and reliable choice, is now in crisis. Leadership changes, missing builds, and key revocation have destabilized the project. It is unclear whether recovery is possible. CalyxOS had value in easing the transition away from stock Android—offering privacy without steep usability trade-offs. In contrast, GrapheneOS has always prioritized hardening, at the cost of some convenience. It remains the most credible option for users requiring a secure and modifiable mobile system in 2025.

Platform control is eroding. Hardware constraints are increasing. The remaining space for a private, verifiable, and usable phone is shrinking—but it has not vanished. Whether more open, community-driven alternatives can become viable remains uncertain.
