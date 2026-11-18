export const en = {
  common: {
    skip: 'Skip to content',
    copy: 'Copy',
    copied: 'Copied',
    copyError: 'Error',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    github: 'GitHub',
  },
  nav: {
    home: 'Home',
    architecture: 'Architecture',
    gettingStarted: 'Get started',
    roadmap: 'Roadmap',
    news: "What's new",
    resources: 'Resources',
  },
  footer: {
    tagline: 'An experimental 64-bit operating system written in Rust. Explicit over magic, layers over piles.',
    version: 'v0.52',
    license: 'MIT',
    siteTitle: 'Site',
    projectTitle: 'Project',
    toolingTitle: 'Tooling',
    site: [
      { label: 'Home', path: '/' },
      { label: "What's new", path: '/news/' },
      { label: 'Architecture', path: '/architecture/' },
      { label: 'Get started', path: '/getting-started/' },
      { label: 'Roadmap', path: '/roadmap/' },
      { label: 'Resources', path: '/resources/' },
    ],
    project: [
      { label: 'Main repository', href: 'https://github.com/NeoDOS-Project/NeoDOS' },
      { label: 'Issues', href: 'https://github.com/NeoDOS-Project/NeoDOS/issues' },
      { label: 'Pull requests', href: 'https://github.com/NeoDOS-Project/NeoDOS/pulls' },
      { label: 'Changelog', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/CHANGELOG.md' },
      { label: 'MIT License', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/LICENSE' },
    ],
    tooling: [
      { label: 'NeoDev', href: 'https://github.com/NeoDOS-Project/NeoDev' },
      { label: 'NeoTools', href: 'https://github.com/NeoDOS-Project/NeoTools' },
      { label: 'Dev server', href: 'https://github.com/NeoDOS-Project/neodos-dev-server' },
      { label: 'Documentation', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/README.md' },
      { label: 'Full roadmap', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/ROADMAP.md' },
    ],
    copyright: 'NeoDOS Project',
    risk: 'Experimental software · use at your own risk',
    builtWith: 'Built with Astro',
    source: 'Site source',
  },
  home: {
    meta: {
      title: 'A modern operating system in Rust',
      description:
        'NeoDOS is a modern 64-bit operating system written in Rust for x86-64: hybrid kernel, Object Manager, isolated drivers, SMP and ACL-based security.',
    },
    hero: {
      eyebrow: 'Operating system · Rust · x86-64',
      titleA: 'A modern operating',
      titleB: 'system, from scratch.',
      lead: 'NeoDOS is a 64-bit OS with a monolithic kernel and microkernel-style isolated drivers. It boots on UEFI, scales to 16 CPUs, and treats every resource —processes, files, devices— as an object with a name, handles and ACLs.',
      badges: {
        version: 'v0.52',
        tests: '997 tests',
        abi: 'ABI v8',
        license: 'MIT',
      },
      ctaPrimary: 'Build and boot',
      ctaSecondary: 'View on GitHub',
      terminal: {
        label: 'NeoDOS boot log',
        title: 'neodos — qemu · serial',
        first: 'NeoDOS',
        firstVersion: 'v0.52 · x86-64 · UEFI',
        lines: [
          'bootloader.efi → kernel.elf',
          'Ob manager · VFS · NeoFS v2',
          'SMP 16 CPUs · APIC 1 kHz',
          '997 kernel tests passed',
          'NeoInit PID 1 · NeoShell Ring 3',
        ],
        prompt: 'NeoShell',
        promptCommand: 'C:\\>',
      },
    },
    stats: [
      { label: 'Current version', value: 'v0.52', suffix: '' },
      { label: 'Kernel tests', value: '997', suffix: 'passing' },
      { label: 'Boot phases', value: '31', suffix: '' },
      { label: 'SMP', value: '16', suffix: 'CPUs' },
    ],
    what: {
      eyebrow: 'What is NeoDOS',
      title: 'Not another Linux. Not another Windows.',
      lead: 'It is a laboratory of ideas where architectural decisions are explicit, traceable and debatable. A real operating system —multiprocessing, SMP, isolated drivers, its own filesystem— not a teaching toy.',
      cards: [
        {
          title: 'Explicit over magic',
          body: 'Every memory allocation, context switch and state transition is traceable in the code. No “scheduler magic”, no “memory manager magic”.',
        },
        {
          title: 'Layers, not piles',
          body: 'HAL is HAL. VFS is VFS. Scheduler is scheduler. Dependencies only flow downwards and are enforced by neodev check-deps.',
        },
        {
          title: 'Fail fast, fail clearly',
          body: 'When something goes wrong, the system halts and identifies the component, the error and the likely cause. No generic panics.',
        },
      ],
    },
    architecture: {
      eyebrow: 'Architecture',
      title: 'From firmware to Ring 3 in five layers',
      lead: 'The Object Manager is the central abstraction: syscalls, handles, security and the namespace revolve around objects. Anything that can live in Ring 3 does.',
      flow: [
        { name: 'UEFI', detail: 'OVMF · GOP' },
        { name: 'Bootloader', detail: 'bootloader.efi' },
        { name: 'Kernel', detail: '31 phases' },
        { name: 'NeoInit', detail: 'PID 1' },
        { name: 'NeoShell', detail: 'Ring 3' },
      ],
      layers: [
        {
          title: 'Arch (x86_64)',
          body: 'GDT, IDT, 4-level paging and the SMP trampoline. All of the system’s assembly lives here.',
        },
        {
          title: 'HAL v0.4',
          body: 'Raw/safe split, 26 extern "C" primitives and assembly confined behind a stable interface.',
        },
        {
          title: 'System Services',
          body: 'Scheduler, memory, Object Manager, VFS, IPC/pipes, async IRP, Event Bus and NT6 security.',
        },
        {
          title: 'NEM Driver Runtime',
          body: '8-state certification pipeline, 12 capabilities, X4 isolation and a versioned ABI.',
        },
        {
          title: 'Syscall SSDT',
          body: 'RAX 0–99, a 256-slot table, O(1) dispatch and a permission table separate from the handlers.',
        },
      ],
      cta: 'See the full architecture',
    },
    status: {
      eyebrow: 'Current state',
      title: 'A real system, in active development',
      lead: 'The kernel already covers UEFI boot, SMP, object management, ACL security, a TCP/IP stack and its own copy-on-write filesystem.',
      specs: [
        { term: 'Kernel', value: 'v0.52 · 997 tests · 31 boot phases' },
        { term: 'Syscalls', value: 'SSDT RAX 0–99 · 256 slots · ABI v8' },
        { term: 'SMP', value: '16 CPUs · INIT-SIPI-SIPI · IPI (reschedule, TLB shootdown)' },
        { term: 'Drivers', value: '7 standalone NEM drivers + 5 reference · certification and capabilities' },
        { term: 'Memory', value: 'Buddy + slab with per-CPU cache · demand paging · mmap' },
        { term: 'Security', value: 'SID, Token, ACL, ACE and SeAccessCheck — the NT6 model' },
        { term: 'Filesystem', value: 'NeoFS v2, VFS and IoStack · FAT32 for the ESP · page cache' },
        { term: 'Userland', value: 'NeoShell Ring 3 · NXL v2 PIE libraries · neocurl over HTTPS' },
      ],
      quote:
        '“Explicit over magic. Layers, not piles. Fail fast, fail clearly. Isolated drivers, small kernel.”',
      quoteCite: 'NeoDOS design philosophy',
    },
    quickstart: {
      eyebrow: 'Quick start',
      title: 'From zero to NeoShell in three commands',
      lead: 'NeoDev is the external development tool. It builds the kernel, generates the GPT image, boots QEMU with OVMF and runs the test suite.',
      checklist: [
        'Rust nightly and the x86_64-unknown-none and x86_64-unknown-uefi targets',
        'QEMU, OVMF and util-linux (sfdisk)',
        'GDB if you want to step through the kernel',
      ],
      cta: 'Installation guide',
      codeTitle: 'bash — install and boot',
      code: `# 1. Install the development tool
cargo install --git https://github.com/NeoDOS-Project/NeoDev.git

# 2. Build kernel, bootloader, userland and the GPT image
neodev build --image

# 3. Boot QEMU with OVMF and GDB on :1234
neodev run

# Automated test suite (997/997)
neodev test`,
    },
    ecosystem: {
      eyebrow: 'Ecosystem',
      title: 'One project, several tools',
      lead: 'The system is organized into independent repositories: the OS, the development toolchain, the analysis tools and the editor services.',
      repos: [
        {
          name: 'NeoDOS',
          tag: 'Main',
          description: 'Kernel, bootloader, drivers, userland, tools and system documentation.',
          url: 'https://github.com/NeoDOS-Project/NeoDOS',
        },
        {
          name: 'NeoDev',
          tag: 'Toolchain',
          description: 'Build, GPT image generation, QEMU boot and automated test suite.',
          url: 'https://github.com/NeoDOS-Project/NeoDev',
        },
        {
          name: 'NeoTools',
          tag: 'Tooling',
          description: 'Host utilities for analyzing NeoDOS binaries: nxeinfo, nxpkg and nxdump.',
          url: 'https://github.com/NeoDOS-Project/NeoTools',
        },
        {
          name: 'neodos-dev-server',
          tag: 'Tooling',
          description: 'LSP server + MCP server + shared toolkit for OS development.',
          url: 'https://github.com/NeoDOS-Project/neodos-dev-server',
        },
      ],
    },
    cta: {
      eyebrow: 'Open source',
      title: 'Code is truth.',
      body: 'Documentation explains the design; code proves it. Explore the kernel, follow the roadmap or open an issue with your idea.',
      primary: 'Explore the repository',
      secondary: 'View the roadmap',
    },
  },
  architecture: {
    meta: {
      title: 'Architecture',
      description:
        'NeoDOS architecture: five vertical layers, Object Manager, SMP scheduler, memory, NT6 security, isolated NEM drivers and NeoFS v2.',
    },
    hero: {
      eyebrow: 'Architecture',
      titleA: 'Five layers.',
      titleB: 'One Object Manager.',
      lead: 'NeoDOS combines a monolithic kernel with a microkernel-style isolated driver subsystem. Dependencies only flow downwards and critical interfaces are frozen by contract.',
      badges: ['hybrid kernel', 'minimal Ring 0', 'ABI v8'],
    },
    boot: {
      eyebrow: 'Boot flow',
      title: 'From UEFI to NeoShell',
      lead: 'The firmware loads the bootloader from the ESP; it loads the kernel ELF and the NeoFS image into memory, captures the final UEFI memory map and jumps to the kernel with a BootInfo structure.',
      codeTitle: 'text — boot sequence',
      code: `UEFI Firmware (OVMF)
  └─ GPT → ESP → /EFI/BOOT/BOOTX64.EFI
       ↓
NeoDOS Bootloader (UEFI application)
  ├─ GOP framebuffer + logging
  ├─ loads kernel.elf and its PT_LOAD segments
  ├─ loads the NeoFS image as a RAM disk
  └─ ExitBootServices + BootInfo → kernel entry
       ↓
NeoDOS Kernel (x86_64-unknown-none)
  ├─ 31 phases: GDT/IDT, memory, Ob, SMP, drivers...
  ├─ mounts NeoFS at C: and the FAT32 ESP at A:
  ├─ kernel self-tests (997)
  └─ starts services in dependency order
       ↓
NeoInit (PID 1) → NeoShell (Ring 3)`,
      cards: [
        {
          title: 'Bootloader',
          body: 'A UEFI application that initializes GOP, loads the kernel and disk image, exits Boot Services and hands over the final memory map.',
        },
        {
          title: 'Kernel',
          body: '31 ordered initialization phases: CPU, memory, Object Manager, SMP, storage, drivers, networking, registry and services.',
        },
        {
          title: 'Userland',
          body: 'NeoInit starts as PID 1 and launches NeoShell in Ring 3. Every interactive command is an .NXE binary, not a Ring 0 shell.',
        },
      ],
    },
    layers: {
      eyebrow: 'Layers',
      title: 'Strict separation of responsibilities',
      lead: 'A module belongs to exactly one layer and may only depend on lower layers. The rule is verified automatically on every build.',
      items: [
        {
          name: 'Arch (x86_64)',
          text: 'GDT, IDT, 4-level paging, SMP trampoline and all system assembly. It is the only layer that touches hardware directly.',
        },
        {
          name: 'HAL v0.4',
          text: 'Raw/safe split with 26 extern "C" primitives. Assembly is confined behind a stable interface consumed by the rest of the kernel.',
        },
        {
          name: 'System Services',
          text: 'Scheduler with 4 priorities, buddy + slab memory, Object Manager, VFS, IPC/pipes, async IRP, Event Bus and the NT6 security model.',
        },
        {
          name: 'NEM Driver Runtime',
          text: '8-state certification pipeline, 12 capability flags, X4 isolation with 16 slots of 1 MB and a versioned per-driver ABI.',
        },
        {
          name: 'Syscall SSDT',
          text: 'RAX 0–99 SSDT with a 256-slot table, O(1) dispatch and a permission table separate from the handler table.',
        },
      ],
      calloutTitle: 'Dependency rule.',
      calloutBody:
        'Flow is always downwards: SSDT → system services → HAL → arch. neodev check-deps fails the build if a layer imports something it should not.',
    },
    subsystems: {
      eyebrow: 'Subsystems',
      title: 'What lives inside the kernel',
      lead: 'Every subsystem has its own design document and its own tests. None depends on another’s internal details.',
      items: [
        {
          icon: 'box',
          title: 'Object Manager',
          text: 'The system’s central abstraction: object types, namespace, handles, URNs and security. Processes, files, devices, timers and services are named objects.',
        },
        {
          icon: 'cpu',
          title: 'Scheduler',
          text: 'Four priorities with aging and work stealing. Per-CPU runqueues and an explicit commit point: SELECT → VALIDATE FRAME → COMMIT → DISPATCH.',
        },
        {
          icon: 'memory',
          title: 'Memory',
          text: 'Buddy frame allocator over the UEFI map, slab with per-CPU hot cache, demand paging and mmap on 4-level paging.',
        },
        {
          icon: 'layers',
          title: 'IPC and I/O',
          text: 'Pipes, async IRP, work queue and Event Bus. KWait unifies kernel waits to avoid ad-hoc mechanisms per subsystem.',
        },
        {
          icon: 'shield',
          title: 'Security',
          text: 'NT6 model with SID, Token, ACL, ACE and SeAccessCheck. Every object access goes through an explicit privilege check.',
        },
        {
          icon: 'gear',
          title: 'NEM drivers',
          text: 'Standalone drivers certified through 8 states, with 12 explicit capabilities and isolation in 16 slots of 1 MB. The kernel does not trust them.',
        },
        {
          icon: 'disk',
          title: 'Filesystem',
          text: 'NeoFS v2 with copy-on-write, VFS and IoStack, a hash + LRU page cache, and FAT32 for the boot ESP.',
        },
        {
          icon: 'network',
          title: 'Networking',
          text: 'TCP/IP stack with sockets, ARP, DHCP and DNS. NICs integrate through NEM drivers and devices are exposed as objects.',
        },
      ],
    },
    objects: {
      eyebrow: 'Organization',
      title: 'An object-oriented model',
      lead: 'The Object Manager (Ob) is the central abstraction. Syscalls operate on Ob handles, and every new syscall must be sys_ob_*.',
      bullets: [
        'Handles with per-object permissions, not global file descriptors.',
        'Hierarchical namespace: \\Device, \\Registry, \\Service, \\Global.',
        'Typed objects with queryable and mutable information classes.',
        'Security built in: every handle is validated against the process token.',
      ],
      codeTitle: 'text — syscall SSDT',
      code: `RAX 0–99   → 256-slot SSDT table
dispatch    → O(1), no linear search
permissions → table separate from handlers
contract    → frozen ABI v8

# Every new syscall:
sys_ob_*  → takes/returns Ob handles
          → never raw pointers into kernel

# Verification
neodev check-deps
neodev test`,
    },
    disk: {
      eyebrow: 'Storage',
      title: 'The whole system fits in one GPT image',
      lead: 'NeoDev generates a single GUID-partitioned disk image: a FAT32 ESP for the bootloader and kernel, and a NeoFS partition for the system.',
      headers: { region: 'Region', content: 'Contents' },
      rows: [
        { range: 'LBA 0', content: 'Protective MBR' },
        { range: 'LBA 1–33', content: 'GPT header + partition table' },
        { range: 'LBA 34–2047', content: 'Alignment' },
        { range: 'LBA 2048–206847', content: 'ESP / FAT32 — bootloader.efi + kernel.elf' },
        { range: 'LBA 206848–227327', content: 'NeoDOS — NeoFS filesystem' },
        { range: 'End', content: 'Backup GPT' },
      ],
      calloutTitle: 'Experimental project.',
      calloutBody:
        'NeoDOS does not aim for binary compatibility with Linux or Windows, nor to replace them in production. It is a research and learning platform.',
    },
    invariants: {
      eyebrow: 'Invariants',
      title: 'The rules that are not negotiable',
      items: [
        {
          title: 'Code is truth',
          body: 'Documentation explains the design, it does not replicate the code. If the architecture changes, the docs change in the same commit.',
        },
        {
          title: 'Tests are specification',
          body: '997 tests are not a metric: they are the executable specification of kernel behavior. If there is no test, the behavior is undefined.',
        },
        {
          title: 'Compatibility is a contract',
          body: 'Once a syscall, an ABI structure or a driver format is declared stable, it does not change. Semantic versioning applies to the kernel.',
        },
        {
          title: 'No Ring 0 shell',
          body: 'Anything that can live in Ring 3 does. The kernel provides mechanisms; policies and commands belong to userland.',
        },
      ],
      primary: 'Architecture documentation',
      secondary: 'Source of truth',
    },
  },
  gettingStarted: {
    meta: {
      title: 'Get started',
      description:
        'Build and boot NeoDOS: requirements, NeoDev installation, GPT image build, QEMU execution and the automated test suite.',
    },
    hero: {
      eyebrow: 'Get started',
      titleA: 'Build the kernel.',
      titleB: 'Boot the system.',
      lead: 'NeoDOS builds on Linux with Rust nightly and boots in QEMU with OVMF. NeoDev handles the bootloader, the GPT image, userland and tests.',
      badges: ['Rust nightly', 'QEMU + OVMF', 'Experimental'],
    },
    step1: {
      eyebrow: 'Step 1',
      title: 'Prepare the environment',
      lead: 'You need a Linux host, Rust nightly with the bare-metal targets, and the virtualization tools.',
      requirements: [
        'Rust nightly + the x86_64-unknown-none and x86_64-unknown-uefi targets',
        'QEMU (system x86_64) and the OVMF firmware',
        'util-linux (sfdisk) to generate the GPT table',
        'GDB, optional, to debug the kernel on :1234',
        'git and the GitHub CLI if you plan to clone and contribute',
      ],
      fedoraTitle: 'bash — Fedora / RHEL',
      fedoraCode: `sudo dnf install qemu-system-x86 ovmf util-linux gdb git

rustup toolchain install nightly
rustup target add x86_64-unknown-none x86_64-unknown-uefi --toolchain nightly`,
      debianTitle: 'bash — Debian / Ubuntu',
      debianCode: `sudo apt install qemu-system-x86 ovmf util-linux gdb git

rustup toolchain install nightly
rustup target add x86_64-unknown-none x86_64-unknown-uefi --toolchain nightly`,
    },
    step2: {
      eyebrow: 'Step 2',
      title: 'Install NeoDev',
      lead: 'NeoDev is the project’s external toolchain. It builds every component with the right target, generates the disk image and orchestrates QEMU and the tests.',
      codeTitle: 'bash — install NeoDev',
      code: `cargo install --git https://github.com/NeoDOS-Project/NeoDev.git

# Check that it is available
neodev --help`,
      note: 'NeoDev does not publish releases on crates.io yet. Installing from the Git repository is the recommended path, and you can pin a specific revision.',
    },
    step3: {
      eyebrow: 'Step 3',
      title: 'Clone and boot',
      lead: 'The main repository contains the kernel, bootloader, drivers, userland and documentation.',
      codeTitle: 'bash — build, run and test',
      code: `gh repo clone NeoDOS-Project/NeoDOS
cd NeoDOS

# kernel + bootloader + userland + GPT image
neodev build --image

# QEMU + OVMF + GDB :1234
neodev run

# test suite (997/997)
neodev test`,
      calloutTitle: 'Rebuild the image before testing.',
      calloutBody:
        'neodev test loads the kernel.elf at the project root. If disk_image.img gets dirty after an interactive boot, run neodev build --image and retry the tests.',
    },
    reference: {
      eyebrow: 'Reference',
      title: 'NeoDev commands',
      lead: 'Commands run from the repository root and read their configuration from neodev.toml.',
      headers: { command: 'Command', description: 'Description' },
      commands: [
        { cmd: 'neodev build --image', desc: 'Builds bootloader, kernel, userland and the full GPT image.' },
        { cmd: 'neodev build --quick --image', desc: 'Incremental rebuild of kernel + bootloader + image.' },
        { cmd: 'neodev run', desc: 'Boots QEMU with OVMF, serial console and GDB listening on :1234.' },
        { cmd: 'neodev test', desc: 'Runs the automated kernel suite (997 tests).' },
        { cmd: 'neodev list', desc: 'Discovers the workspace projects and their targets.' },
        { cmd: 'neodev check-deps', desc: 'Verifies that layer dependencies only flow downwards.' },
        { cmd: 'neodev clean', desc: 'Removes build artifacts and generated images.' },
      ],
    },
    config: {
      eyebrow: 'Configuration',
      title: 'Tune the virtual machine',
      lead: 'neodev.toml defines partition sizes, memory, CPUs and the OVMF firmware path. Defaults: 512 MB RAM, 2 CPUs and user-mode networking.',
      body: 'If you prefer VirtualBox, the repository includes a dedicated setup and boot guide.',
      qemu: 'QEMU guide',
      virtualbox: 'VirtualBox guide',
      codeTitle: 'toml — neodev.toml (excerpt)',
      code: `[project]
esp_size_mb      = 100
neodos_size_mb   = 100
gpt_padding_mb   = 12
kernel_target    = "x86_64-unknown-none"
bootloader_target = "x86_64-unknown-uefi"

[vm]
backend = "qemu"
memory  = 512
cpus    = 2
network = "user"

[qemu]
kvm  = false
bdm  = false
ovmf_code = "/usr/share/OVMF/OVMF_CODE.fd"
ovmf_vars_template = "/usr/share/OVMF/OVMF_VARS.fd"`,
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Read the roadmap before touching the kernel.',
      body: 'Every feature, fix or refactor lives in its own branch and references an issue. GitHub Issues is the official planning system.',
      primary: 'View the roadmap',
      secondary: 'Contribute',
    },
  },
  roadmap: {
    meta: {
      title: 'Roadmap',
      description:
        'NeoDOS roadmap: phases v0.50 to v1.0, kernel milestones, user ecosystem, hardening and post-1.0 goals.',
    },
    hero: {
      eyebrow: 'Roadmap',
      titleA: 'From a working prototype',
      titleB: 'to a stable API.',
      lead: 'The roadmap is organized into phases and milestones with clear technical goals, verified dependencies and justified priorities. GitHub Issues is the source of truth for planning.',
      badges: ['v0.52 current', 'v1.0 · frozen ABI', 'issues = SSOT'],
    },
    map: {
      eyebrow: 'Version map',
      title: 'Five phases to v1.0',
      lead: 'Every version is a milestone. When all of its issues are closed, the version is done and the changelog is generated from the milestones.',
    },
    phases: [
      {
        id: 'P0',
        title: 'Consolidation',
        versions: 'v0.50',
        state: 'Completed',
        tone: 'done',
        active: false,
        description: 'Close in-flight initiatives before opening new fronts.',
        items: ['Shell: tokenizer + quoting', 'Power Phase 2 + hardening', 'NLTv3 i18n + regional formats (v0.51.3)'],
      },
      {
        id: 'P1',
        title: 'Mature kernel',
        versions: 'v0.51 – v0.55',
        state: 'In progress',
        tone: 'active',
        active: true,
        description: 'Remove structural technical debt and stabilize the base for the user ecosystem.',
        items: [
          'NeoFS v2: COW B-tree, free list, snapshots and mkfs',
          'Shell Phase 2: editor, history, pipes and scripting',
          'SAM, network and administration tools',
          'VirtIO, sessions, filesystem security and zero-copy',
          'Registry WAL, Secure Boot, module signing and tracing',
        ],
      },
      {
        id: 'P2',
        title: 'User ecosystem',
        versions: 'v0.56 – v0.60',
        state: 'Planned',
        tone: 'planned',
        active: false,
        description: 'Complete the official tools, the NT Executive model and the installation system.',
        items: ['NXE/NXP ecosystem completion', 'Executive Manager', 'Official tools', 'Installation and bootstrap'],
      },
      {
        id: 'P3',
        title: 'Security and stability',
        versions: 'v0.61 – v0.69',
        state: 'Planned',
        tone: 'planned',
        active: false,
        description: 'Full pre-v1.0 hardening: audits, fuzzing, performance and test coverage.',
        items: [
          'Full kernel security audit',
          'Syscall and NEM driver fuzzing',
          'ASLR v2/v3, NX stack and heap',
          'Performance and test coverage',
        ],
      },
      {
        id: 'P4',
        title: 'First stable API',
        versions: 'v1.0',
        state: 'Target',
        tone: 'goal',
        active: false,
        description: 'Freeze the ABI: everything stabilized in v1.0 does not change until v2.0.',
        items: [
          'Syscalls 0–99 and NEM v3 frozen',
          'Stable NXE/NXP format and NeoFS v2',
          'Release documentation and migration guide',
          'All binaries built against the final ABI',
        ],
      },
    ],
    future: {
      eyebrow: 'After v1.0',
      title: 'Where the project is going',
      lead: 'The major ABI changes with each major version. Minor versions add compatible capabilities without breaking contracts.',
      headers: { version: 'Version', focus: 'Focus', examples: 'Examples' },
      rows: [
        { version: 'v1.x', focus: 'Maintenance and compatible features', examples: 'Bug fixes, new syscalls, VirtIO GPU/Sound, performance' },
        { version: 'v2.x', focus: 'Networking and virtualization', examples: 'IPv6, VLAN, firewall, KVM enlightenments, network services' },
        { version: 'v3.x', focus: 'GUI and user experience', examples: '2D compositor, NeoStore, 3D graphics, desktop' },
        { version: 'v4.x', focus: 'Enterprise scalability', examples: 'NUMA, clustering, high availability, TPM 2.0, iSCSI' },
      ],
    },
    method: {
      eyebrow: 'Methodology',
      title: 'How NeoDOS is built',
      cards: [
        {
          icon: 'git',
          title: 'One branch per task',
          body: 'Features, fixes, refactors, audits and investigations live on dedicated branches (feat/, fix/, docs/…). Nobody works directly on develop.',
        },
        {
          icon: 'book',
          title: 'Issues as the source of truth',
          body: 'Ideas become issues with acceptance criteria. An issue is only closed when all of its checkboxes are marked.',
        },
        {
          icon: 'check',
          title: 'Verify before committing',
          body: 'Build, neodev test, check-deps, skills and markdownlint must pass before opening a pull request.',
        },
      ],
      primary: 'Full roadmap',
      secondary: 'Open issues',
    },
  },
  news: {
    meta: {
      title: "What's new",
      description:
        'Latest NeoDOS releases: v0.52 brings native HTTP/HTTPS, a TLS 1.3 stack, the NeoDOS namespace tree and user profiles, plus in-progress work on the trust store.',
    },
    hero: {
      eyebrow: "What's new",
      titleA: 'The latest from',
      titleB: 'the kernel.',
      lead: 'NeoDOS ships in small, verifiable releases. Here is what changed recently — from native HTTPS and TLS 1.3 to the reorganized namespace and per-user profiles. The ABI stays stable across minor releases.',
      badges: ['v0.52 · 2026-11-17', '997/997 tests', 'ABI v8 unchanged'],
    },
    development: {
      eyebrow: 'In development',
      title: 'On develop right now',
      lead: 'Work that has landed on develop but is not part of a tagged release yet.',
      items: [
        {
          title: 'Third-party CA import',
          body: 'certctl import|list|show|remove|status|repair stores CAs in the Registry and makes TLS trust the union with the image bundle. PEM and DER are accepted, server certificates are rejected.',
        },
        {
          title: 'Versioned system trust store',
          body: 'The image ships a DER bundle at \\NeoDOS\\System\\config\\roots.der with an NDTB header. A truncated or edited bundle is rejected instead of silently trusting a subset; neocurl works without --ca and fails closed.',
        },
        {
          title: 'Bundle freshness warnings',
          body: 'neocurl warns when the trust bundle is dated in the future or is older than two years — a warning, not a failure.',
        },
        {
          title: 'Filesystem correctness fixes',
          body: 'Partial inline writes (#755), multi-chunk writes (#748, #751) and directory tree corruption (#753) are fixed, along with stale page-cache pages after COW block freeing (#754).',
        },
        {
          title: 'ELF load region validation',
          body: 'load_elf now requires a LoadRegion and validates every PT_LOAD before copying, closing a path that let a crafted .NXE write into kernel memory (#762).',
        },
      ],
      note: 'Unreleased work may still change before it is tagged. The changelog is the source of truth.',
    },
    history: {
      eyebrow: 'Release history',
      title: 'Recent releases',
      lead: 'A short view of the last milestones. The complete log lives in the repository.',
    },
    fixesLabel: 'Fixes',
    validationLabel: 'Validation',
    releases: [
      {
        version: 'v0.52',
        date: '2026-11-17',
        title: 'Native HTTP/HTTPS, TLS 1.3, the NeoDOS tree and user profiles',
        badge: 'Latest',
        tone: 'cyan',
        summary:
          'Minor release, ABI/API compatible: 140 commits since v0.51.5. Kernel ABI v8 and SSDT RAX 0–99 (37 assigned) are unchanged.',
        highlights: [
          {
            title: 'NeoHTTP client (#712)',
            body: 'libhttp, TcpTransport, the neocurl CLI and an in-guest HTTP acceptance suite. ARP expiry, pending ACK retries, window updates and ordered FIN/RST make bulk downloads reliable (#721).',
          },
          {
            title: 'TLS 1.3 from scratch (#712)',
            body: 'libcrypto (SHA-2, HMAC/HKDF, ChaCha20-Poly1305, X25519, RSA and ECDSA with RFC/NIST vectors) and libtls (record layer, key schedule, X.509 validation, SNI, ALPN). Server authentication is mandatory — no insecure flag.',
          },
          {
            title: 'Trusted clock and Ring 3 CSPRNG',
            body: 'libclock turns RTC + ntpd state into a fail-closed Clock and \\Device\\Random exposes a ChaCha20 DRBG seeded from RDSEED/RDRAND. ntpd can no longer step the clock to 2055.',
          },
          {
            title: 'NeoDOS tree and profiles',
            body: 'System binaries under \\NeoDOS\\System, libraries under \\NeoDOS\\Libraries, plus \\Program Files, \\ProgramData and \\Users. Every SAM account gets Desktop/Documents/Downloads/AppData directories (#398, #400).',
          },
        ],
        fixes: [
          {
            title: 'brk and user-memory validation (#745)',
            body: 'brk mapped one page too few and the validator accepted memory past the break, so a large buffer could panic in Ring 0.',
          },
          {
            title: 'SocketRecv and neocurl',
            body: 'Demand-paged pages returned EFAULT instead of being faulted in; neocurl reused freed blocks instead of exhausting the heap.',
          },
        ],
        validation:
          '997/997 kernel tests pass · neodev check-deps: no new violations · real HTTPS download anchored at GTS Root R4.',
        url: 'https://github.com/NeoDOS-Project/NeoDOS/releases/tag/v0.52',
      },
      {
        version: 'v0.51.5',
        date: '2026-10-09',
        title: 'VFS synchronization hardening',
        badge: 'Patch',
        tone: '',
        summary: 'No ABI/API change. Focused on lock contention and deterministic filesystem state.',
        highlights: [
          {
            title: 'VFS lock hierarchy (#83, #519)',
            body: 'MOUNT_MANAGER joined the enforced VFS → PAGE_CACHE → BLOCK_DEVICES hierarchy; path resolution stopped allocating under the VFS lock and cache flushes became bounded.',
          },
          {
            title: 'NeoFS v2 snapshots',
            body: 'Lazy free-list persistence (~29% faster metadata writes), per-file snapshot extraction and monotonic snapshot generations with explicit delete.',
          },
          {
            title: 'Scheduler and networking',
            body: 'Per-CPU O(1) priority runqueues, loopback interface and routing, per-NIC statistics, DHCP renewal supervision and a working TCP data path.',
          },
        ],
        fixes: [],
        validation: '861/861 kernel tests pass · 4/4 SMP boots to shell with DHCP ACK.',
        url: 'https://github.com/NeoDOS-Project/NeoDOS/releases/tag/v0.51.5',
      },
      {
        version: 'v0.51.4',
        date: '2026-10-06',
        title: 'Stability release',
        badge: 'Patch',
        tone: '',
        summary: 'No new features: four scheduler and syscall ownership bugs closed (#476, #477, #482, #488).',
        highlights: [
          {
            title: 'KPRCB/RSP ownership',
            body: 'The reschedule path keeps interrupts disabled from KPRCB publication to the physical stack switch, with a permanent site-tagged assertion.',
          },
          {
            title: 'Atomic slot claim and IRETQ audit',
            body: 'Concurrent spawns can no longer be handed the same user/heap slot, and the boot thread no longer triggers a false IRETQ_BAD_FRAME report.',
          },
        ],
        fixes: [],
        validation: '825/825 kernel tests · QEMU SMP1/2/4 and VirtualBox SMP2: no ownership violations or panics.',
        url: 'https://github.com/NeoDOS-Project/NeoDOS/releases/tag/v0.51.4',
      },
    ],
    cta: {
      eyebrow: 'Source of truth',
      title: 'Read the full changelog.',
      body: 'Every release, fix and known limitation is documented in the repository.',
      primary: 'Full changelog',
      secondary: 'All releases',
    },
  },
  resources: {
    meta: {
      title: 'Resources',
      description:
        'NeoDOS repositories, documentation and entry points for contributors: architecture, syscalls, drivers, filesystem, testing and tooling.',
    },
    hero: {
      eyebrow: 'Resources',
      titleA: 'Everything you need',
      titleB: 'to dive in.',
      lead: 'Repositories, documentation and entry points for contributors and curious readers.',
      badges: ['MIT licensed', 'Open source', 'Rust'],
    },
    repos: {
      eyebrow: 'Repositories',
      title: 'The NeoDOS ecosystem',
      lead: 'Independent repositories, one system. Start with the main repository and follow the docs from there.',
    },
    repoList: [
      {
        name: 'NeoDOS-Project/NeoDOS',
        tag: 'Main',
        description: 'Kernel, bootloader, drivers, userland, tools, docs and roadmap.',
        url: 'https://github.com/NeoDOS-Project/NeoDOS',
      },
      {
        name: 'NeoDOS-Project/NeoDev',
        tag: 'Toolchain',
        description: 'Unified build, image, run, test and CI toolchain.',
        url: 'https://github.com/NeoDOS-Project/NeoDev',
      },
      {
        name: 'NeoDOS-Project/NeoTools',
        tag: 'Tooling',
        description: 'Host tools for NeoDOS binary analysis: nxeinfo, nxpkg and nxdump.',
        url: 'https://github.com/NeoDOS-Project/NeoTools',
      },
      {
        name: 'NeoDOS-Project/neodos-dev-server',
        tag: 'Tooling',
        description: 'LSP server + MCP server + shared toolkit for NeoDOS development.',
        url: 'https://github.com/NeoDOS-Project/neodos-dev-server',
      },
      {
        name: 'NeoDOS-Project/.github',
        tag: 'Community',
        description: 'Community health files, issue templates and pull request templates.',
        url: 'https://github.com/NeoDOS-Project/.github',
      },
      {
        name: 'NeoDOS-Project/neodos-web',
        tag: 'Website',
        description: 'Source code for this website, built with Astro and deployed on GitHub Pages.',
        url: 'https://github.com/NeoDOS-Project/neodos-web',
      },
    ],
    docs: {
      eyebrow: 'Documentation',
      title: 'Read the source of truth',
      lead: 'Architecture, syscalls, drivers and testing are documented in the repository. These are the best entry points.',
      links: [
        { label: 'Documentation index', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/README.md' },
        { label: 'Architecture overview', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/architecture/overview.md' },
        { label: 'Source of truth · invariants', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/architecture/source-of-truth.md' },
        { label: 'Syscalls reference', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/kernel/syscalls.md' },
        { label: 'Object Manager', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/kernel/objects.md' },
        { label: 'Drivers and NEM format', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/drivers/overview.md' },
        { label: 'Filesystem and NeoFS', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/filesystem/overview.md' },
        { label: 'Boot flow', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/boot/boot-flow.md' },
        { label: 'Testing guide', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/development/testing.md' },
        { label: 'Debugging with GDB', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/development/debugging.md' },
        { label: 'QEMU setup', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/development/qemu.md' },
        { label: 'VirtualBox setup', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/development/virtualbox.md' },
      ],
    },
    contribute: {
      eyebrow: 'Contributing',
      title: 'Join the project',
      lead: 'NeoDOS is MIT-licensed and developed in the open. Read the contributing guide, check the open issues and open a pull request from a dedicated branch.',
      cards: [
        {
          icon: 'book',
          title: 'Contributing guide',
          body: 'Workflow, branch naming, commit conventions and the verification checklist.',
          href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/CONTRIBUTING.md',
          action: 'Read CONTRIBUTING.md',
        },
        {
          icon: 'git',
          title: 'Open issues',
          body: 'Bugs, feature requests and tracking issues. Every task starts with an issue.',
          href: 'https://github.com/NeoDOS-Project/NeoDOS/issues',
          action: 'Browse issues',
        },
        {
          icon: 'external',
          title: 'Changelog and releases',
          body: 'What changed in each version and where the project is heading.',
          href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/CHANGELOG.md',
          action: 'Read the changelog',
        },
      ],
    },
    cta: {
      eyebrow: 'Start building',
      title: 'The kernel is waiting.',
      body: 'Install the toolchain, build the image and boot NeoDOS in QEMU in a few minutes.',
      primary: 'Get started',
      secondary: 'View the repository',
    },
  },
  notFound: {
    title: 'Page not found',
    description: 'The page you are looking for does not exist.',
    heading: '404 — Page not found',
    body: 'The page you are looking for does not exist or has moved.',
    english: 'English home',
    spanish: 'Inicio en español',
  },
};

export type SiteContent = typeof en;
