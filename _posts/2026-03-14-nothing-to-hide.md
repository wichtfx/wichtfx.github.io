---
layout: post
title: "Nothing to Hide, Until You Do"
date: 2026-03-14
description: "The 'nothing to hide' argument assumes the rules won't change and you won't be caught in someone else's net. History is not kind to either assumption."
author: François-Xavier Wicht
tags: surveillance privacy cryptography open-source digital-rights
category: opinion
---

"I have nothing to hide."

It is the standard response when surveillance or data collection comes up. The claim implicitly assumes two things: that what is legal today will remain legal tomorrow, and that one's data speaks only for oneself. Neither assumption is reliable.

## The rules change

Legality is not a fixed property of behavior; it is defined by whoever holds power at a given time. Activities and associations that carry no risk today may be reframed, criminalized, or used as evidence under a future legal order. Groups that were tolerated become targeted; causes that were mainstream become subversive. This pattern has repeated across enough different political contexts that treating current law-abiding status as a forward-looking guarantee is not a well-supported assumption.

What makes the present situation structurally different is the scale and permanence of what gets collected. A government that comes to power tomorrow inherits databases, logs, and the digital records of everyone who ever used a traceable payment, posted on a platform, or passed a camera. In the past, building a prosecution required active investigation: finding witnesses, seizing physical records, constructing a case from scratch. Today, that case may already exist, assembled passively and without enforcement intent at the time of collection. Data from a donation to a cause later outlawed, attendance at a protest later reframed, or views a future government decides to criminalize is already stored somewhere. It cannot be retroactively deleted by the person it describes. The only effective mitigation is to limit what is collected in the first place.

This is not hypothetical. There are documented cases of governments using data fusion platforms to cross-reference records from across agencies, including tax data, health records, and social media, into unified enforcement files. People who had complied with all applicable laws had data they submitted in good faith repurposed for enforcement purposes unrelated to its original collection; courts have in some cases found these arrangements unlawful. Many of those affected had, by any reasonable standard, done exactly what was asked of them. The rules changed, and the data was already there.

## Your data is also used to profile others

Even in the absence of personal targeting, the data an individual generates does not speak only for them. It is used to build statistical models applied to people who share the same social graph, neighborhood, financial patterns, or browsing history. Mass surveillance is not primarily about monitoring known individuals; it is about identifying unknown ones before they act, or flagging those who fit a pattern deemed suspicious by whoever controls the system.

Enforcement agencies have used platforms that map likely home addresses for people flagged for enforcement action, drawing on health records, identification data, and unverified third-party tips. Lawyers have described clients detained after automated systems misidentified them. These systems are not identifying criminals; they are generating targets from statistical patterns, and errors propagate faster than corrections do.

The "nothing to hide" framing treats privacy as a purely personal concern. It is not. The data generated about an individual is simultaneously data about the communities, networks, and demographic groups they belong to. Degrading one's own privacy protections degrades the protection available to others.

## Defenses that hold

Privacy discussions tend toward fatalism. The following are concrete measures with well-defined properties.

**Use technology designed to be unreadable.** End-to-end encryption means a server breach, subpoena, or regime change yields nothing usable: the data cannot be read without keys held only by the communicating parties. This is a property of the math, not a policy commitment. Encrypting content alone is not enough, however. Metadata, meaning who contacts whom, when, and how often, can be as revealing as content, and services like WhatsApp collect it extensively despite their E2EE. Signal is designed to minimize both. The relevant question is not what a service's privacy policy says, but what it actually guarantees and who holds the keys.

**Sound cryptography outlasts any government.** Laws can change overnight; properly implemented cryptography cannot be broken by political will. A new government can seize servers and compel companies to cooperate, but if the cryptographic construction is sound and publicly specified, the data stays protected. This is why open-source implementations matter: they can be independently audited, and they allow you to compile and run your own builds rather than trusting a vendor's binary. The same logic applies to public infrastructure. A digital identity platform, a central bank wallet, a tax database: the code behind these systems should be open to scrutiny by anyone, not just approved auditors. Formal audits can be captured; public code cannot be quietly changed without someone noticing. A future government cannot silently repurpose a system the world can inspect.

**Cryptographic architecture in public infrastructure is a political choice.** Digital identity is a clear example: schemes like BBS+ allow selective disclosure, meaning a user can prove they are over 18 without revealing their date of birth, or prove residency without revealing their address. BBS+ also prevents the issuer and verifier from colluding to track where and when a credential was used. The EU's eIDAS framework and the Swiss digital identity have not taken this approach; both rely on architectures that permit correlation across uses by design. That is a political choice presented as a technical default, and one that is very difficult to reverse once infrastructure is deployed at scale.

**The services you use shape what gets built.** Every platform and payment method you choose signals what the industry treats as viable. Defaulting to non-private alternatives reinforces their dominance and quietly erodes the infrastructure that tomorrow's targets will depend on.

---

The most precise reading of "I have nothing to hide" is: "I trust that the rules will never be rewritten in ways that affect me, and I am confident that data about me carries no implications for anyone else." The first requires very strong historical optimism. The second requires ignoring how inference at scale works.

---

*A common objection to strong cryptography and privacy-preserving technology is that it primarily benefits criminals: encrypted messaging lets terrorists coordinate, anonymous currencies enable fraud and tax evasion. The clearest counterexample is not a criminal. It is the person who complied fully with the law and had data they submitted in good faith repurposed against them under rules that changed after the fact. Criminals operate outside the law and find other means. The people who lose when privacy infrastructure is weakened are the ones who trusted it.*

---

_The views expressed here are my own and do not necessarily reflect those of my employer or research institutions._
