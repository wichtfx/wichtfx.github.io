---
layout: post
title: Choosing a phone for privacy in 2025
date: 2025-07-15 12:00:00
description: Evaluating modern mobile hardware for privacy, support, and long-term usability.
tags: privacy phones android ios calyxos grapheneos pixel fairphone lineageos
categories: analysis
thumbnail: 
---

This post reviews the current landscape of mobile devices from a privacy and longevity perspective in mid-2025.

## Pixel Devices

Pixel phones remain the most widely supported option for running hardened Android-based systems. GrapheneOS continues to support newer Pixel models with a focus on long-term updates, offering over seven years of software support. These devices combine verified boot, regular security patches, and compatibility with most Android applications.

However, software updates increasingly include changes that affect user control. In July 2025, Google introduced battery performance throttling on the Pixel 6a after approximately 400 charge cycles. The change reduces charging speed and battery capacity, citing safety concerns. The update was deployed automatically, and rollback is not possible. While the device is still officially supported through 2027, its performance and usability are now reduced.

This follows a similar update earlier in the year for the Pixel 4a, which is no longer supported by CalyxOS as of version 5.17.1. These moves raise concerns about long-term hardware viability when changes are enforced unilaterally.

Compatibility issues are also increasing. App installations through Aurora Store are less reliable due to frequent rate-limiting. Banking applications relying on Google's integrity checks often fail to work on hardened systems, and alternatives are scarce.

## Fairphone

The Fairphone 5 emphasizes ethical sourcing, modularity, and hardware longevity. It supports alternate operating systems and is designed for ease of repair. While it provides a longer hardware lifecycle, its security posture is weaker than Pixel devices. Firmware protections are limited, and software hardening is less comprehensive.

For users prioritizing sustainability and openness over strict security guarantees, it remains a strong option.

## LineageOS and Derivatives

LineageOS, DivestOS, and similar projects extend the usability of older or unsupported devices. They reduce dependence on proprietary Google services and maintain an active developer community.

Security remains partial. These systems depend on closed vendor firmware that often goes unpatched. As a result, they are more appropriate for reducing exposure rather than addressing high-threat scenarios.

## iOS

Apple devices offer consistent updates, stable performance, and a tightly integrated software stack. Defaults for data protection are relatively strong, and sandboxing is enforced at the system level.

However, iOS remains a closed platform. Application sources are restricted, the OS cannot be independently audited, and hardware-level changes are not permitted. Trust in the system relies entirely on Apple’s policies, which may shift over time.

## Linux-Based Phones

Phones such as the Librem 5 and PinePhone support full verifiability, user-replaceable components, and open-source operating systems. These devices prioritize user control and long-term transparency.

They are not yet practical for general-purpose use. Battery life is limited, core phone functionality is incomplete, and app ecosystems are sparse. They are promising research platforms, but not substitutes for mainstream smartphones.

## Outlook

The set of viable privacy-respecting mobile devices is narrowing. Pixel phones, especially newer models, continue to provide a reasonable balance of security, modifiability, and long-term support—especially when paired with GrapheneOS. However, recent changes highlight the risks of depending on proprietary firmware and automatic updates.

Fairphone offers an alternative focused on repairability and openness, though with weaker security guarantees. LineageOS-based systems extend older hardware but do not provide comprehensive protection.

No option is without tradeoffs. For now, Pixel devices with GrapheneOS remain the most practical choice for users seeking hardened privacy with broad app compatibility and long-term support.
