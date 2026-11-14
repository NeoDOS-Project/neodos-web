import type { SiteContent } from './en';

export const es: SiteContent = {
  common: {
    skip: 'Saltar al contenido',
    copy: 'Copiar',
    copied: 'Copiado',
    copyError: 'Error',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
    github: 'GitHub',
  },
  nav: {
    home: 'Inicio',
    architecture: 'Arquitectura',
    gettingStarted: 'Empezar',
    roadmap: 'Roadmap',
    resources: 'Recursos',
  },
  footer: {
    tagline: 'Un sistema operativo experimental de 64 bits escrito en Rust. Explícito sobre mágico, capas y no montones.',
    version: 'v0.51.5',
    license: 'MIT',
    siteTitle: 'Sitio',
    projectTitle: 'Proyecto',
    toolingTitle: 'Herramientas',
    site: [
      { label: 'Inicio', path: '/' },
      { label: 'Arquitectura', path: '/architecture/' },
      { label: 'Empezar', path: '/getting-started/' },
      { label: 'Roadmap', path: '/roadmap/' },
      { label: 'Recursos', path: '/resources/' },
    ],
    project: [
      { label: 'Repositorio principal', href: 'https://github.com/NeoDOS-Project/NeoDOS' },
      { label: 'Issues', href: 'https://github.com/NeoDOS-Project/NeoDOS/issues' },
      { label: 'Pull requests', href: 'https://github.com/NeoDOS-Project/NeoDOS/pulls' },
      { label: 'Changelog', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/CHANGELOG.md' },
      { label: 'Licencia MIT', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/LICENSE' },
    ],
    tooling: [
      { label: 'NeoDev', href: 'https://github.com/NeoDOS-Project/NeoDev' },
      { label: 'NeoTools', href: 'https://github.com/NeoDOS-Project/NeoTools' },
      { label: 'Dev server', href: 'https://github.com/NeoDOS-Project/neodos-dev-server' },
      { label: 'Documentación', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/README.md' },
      { label: 'Roadmap completo', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/ROADMAP.md' },
    ],
    copyright: 'NeoDOS Project',
    risk: 'Software experimental · úsalo bajo tu propio riesgo',
    builtWith: 'Hecho con Astro',
    source: 'Código del sitio',
  },
  home: {
    meta: {
      title: 'Un sistema operativo moderno en Rust',
      description:
        'NeoDOS es un sistema operativo moderno de 64 bits escrito en Rust para x86-64: kernel híbrido, Object Manager, drivers aislados, SMP y seguridad ACL.',
    },
    hero: {
      eyebrow: 'Sistema operativo · Rust · x86-64',
      titleA: 'Un sistema operativo',
      titleB: 'hecho desde cero.',
      lead: 'NeoDOS es un SO de 64 bits con kernel monolítico y drivers aislados estilo microkernel. Arranca en UEFI, escala a 16 CPUs y trata cada recurso —procesos, archivos, dispositivos— como un objeto con nombre, handles y ACL.',
      badges: {
        version: 'v0.51.5',
        tests: '937 tests',
        abi: 'ABI v8',
        license: 'MIT',
      },
      ctaPrimary: 'Compilar y arrancar',
      ctaSecondary: 'Ver en GitHub',
      terminal: {
        label: 'Registro de arranque de NeoDOS',
        title: 'neodos — qemu · serial',
        first: 'NeoDOS',
        firstVersion: 'v0.51.5 · x86-64 · UEFI',
        lines: [
          'bootloader.efi → kernel.elf',
          'Ob manager · VFS · NeoFS v2',
          'SMP 16 CPUs · APIC 1 kHz',
          '937 tests del kernel superados',
          'NeoInit PID 1 · NeoShell Ring 3',
        ],
        prompt: 'NeoShell',
        promptCommand: 'C:\\>',
      },
    },
    stats: [
      { label: 'Versión actual', value: 'v0.51.5', suffix: '' },
      { label: 'Tests del kernel', value: '937', suffix: 'pasando' },
      { label: 'Fases de arranque', value: '31', suffix: '' },
      { label: 'SMP', value: '16', suffix: 'CPUs' },
    ],
    what: {
      eyebrow: 'Qué es NeoDOS',
      title: 'No es otro Linux. No es otro Windows.',
      lead: 'Es un laboratorio de ideas donde las decisiones arquitectónicas son explícitas, rastreables y debatibles. Un sistema operativo real —multiproceso, SMP, drivers aislados, sistema de archivos propio— no un juguete didáctico.',
      cards: [
        {
          title: 'Explícito sobre mágico',
          body: 'Cada asignación de memoria, cada cambio de contexto y cada transición de estado es rastreable en el código. Sin «scheduler magic», sin «memory manager magic».',
        },
        {
          title: 'Capas, no montones',
          body: 'HAL es HAL. VFS es VFS. Scheduler es scheduler. Las dependencias solo fluyen hacia abajo y se verifican con neodev check-deps.',
        },
        {
          title: 'Fallo rápido, fallo claro',
          body: 'Cuando algo va mal, el sistema se detiene identificando el componente, el error y la causa probable. Sin pánicos genéricos.',
        },
      ],
    },
    architecture: {
      eyebrow: 'Arquitectura',
      title: 'Del firmware a Ring 3 en cinco capas',
      lead: 'El Object Manager es la abstracción central: las syscalls, los handles, la seguridad y el namespace giran alrededor de objetos. Todo lo que puede vivir en Ring 3, vive en Ring 3.',
      flow: [
        { name: 'UEFI', detail: 'OVMF · GOP' },
        { name: 'Bootloader', detail: 'bootloader.efi' },
        { name: 'Kernel', detail: '31 fases' },
        { name: 'NeoInit', detail: 'PID 1' },
        { name: 'NeoShell', detail: 'Ring 3' },
      ],
      layers: [
        {
          title: 'Arch (x86_64)',
          body: 'GDT, IDT, paginación de 4 niveles y trampolín SMP. Todo el ensamblador del sistema vive aquí.',
        },
        {
          title: 'HAL v0.4',
          body: 'Separación raw/safe, 26 primitivas extern "C" y ensamblador confinado tras una interfaz estable.',
        },
        {
          title: 'System Services',
          body: 'Scheduler, memoria, Object Manager, VFS, IPC/pipes, IRP asíncrono, Event Bus y seguridad NT6.',
        },
        {
          title: 'NEM Driver Runtime',
          body: 'Pipeline de certificación en 8 estados, 12 capacidades, aislamiento X4 y ABI versionada.',
        },
        {
          title: 'Syscall SSDT',
          body: 'RAX 0–99, tabla de 256 slots, dispatch O(1) y tabla de permisos separada de la de handlers.',
        },
      ],
      cta: 'Ver la arquitectura completa',
    },
    status: {
      eyebrow: 'Estado actual',
      title: 'Un sistema real, en desarrollo activo',
      lead: 'El kernel ya cubre arranque UEFI, SMP, gestión de objetos, seguridad ACL, red TCP/IP y un filesystem propio con copy-on-write.',
      specs: [
        { term: 'Kernel', value: 'v0.51.5 · 937 tests · 31 fases de arranque' },
        { term: 'Syscalls', value: 'SSDT RAX 0–99 · 256 slots · ABI v8' },
        { term: 'SMP', value: '16 CPUs · INIT-SIPI-SIPI · IPI (reschedule, TLB shootdown)' },
        { term: 'Drivers', value: '7 NEM standalone + 5 reference · certificación y capacidades' },
        { term: 'Memoria', value: 'Buddy + slab con caché por CPU · demand paging · mmap' },
        { term: 'Seguridad', value: 'SID, Token, ACL, ACE y SeAccessCheck — modelo NT6' },
        { term: 'Filesystem', value: 'NeoFS v2, VFS e IoStack · FAT32 para el ESP · page cache' },
        { term: 'Userland', value: 'NeoShell Ring 3 · 27 binarios .NXE · 2 DLLs .NXL' },
      ],
      quote:
        '«Explícito sobre mágico. Capas, no montones. Fallo rápido, fallo claro. Driver aislado, kernel pequeño.»',
      quoteCite: 'Filosofía de diseño de NeoDOS',
    },
    quickstart: {
      eyebrow: 'Inicio rápido',
      title: 'De cero a NeoShell en tres comandos',
      lead: 'NeoDev es la herramienta externa de desarrollo. Compila el kernel, genera la imagen GPT, arranca QEMU con OVMF y ejecuta la suite de tests.',
      checklist: [
        'Rust nightly y los targets x86_64-unknown-none y x86_64-unknown-uefi',
        'QEMU, OVMF y util-linux (sfdisk)',
        'GDB si quieres depurar el kernel paso a paso',
      ],
      cta: 'Guía de instalación',
      codeTitle: 'bash — instalación y arranque',
      code: `# 1. Instala la herramienta de desarrollo
cargo install --git https://github.com/NeoDOS-Project/NeoDev.git

# 2. Compila kernel, bootloader, userland e imagen GPT
neodev build --image

# 3. Arranca en QEMU con OVMF y GDB en :1234
neodev run

# Suite de tests automatizada (937/937)
neodev test`,
    },
    ecosystem: {
      eyebrow: 'Ecosistema',
      title: 'Un proyecto, varias herramientas',
      lead: 'El sistema se organiza en repositorios independientes: el SO, el toolchain de desarrollo, las herramientas de análisis y los servicios para editores.',
      repos: [
        {
          name: 'NeoDOS',
          tag: 'Principal',
          description: 'Kernel, bootloader, drivers, userland, herramientas y documentación del sistema.',
          url: 'https://github.com/NeoDOS-Project/NeoDOS',
        },
        {
          name: 'NeoDev',
          tag: 'Toolchain',
          description: 'Build, generación de imagen GPT, arranque en QEMU y suite de tests automatizada.',
          url: 'https://github.com/NeoDOS-Project/NeoDev',
        },
        {
          name: 'NeoTools',
          tag: 'Herramientas',
          description: 'Utilidades de host para analizar binarios NeoDOS: nxeinfo, nxpkg y nxdump.',
          url: 'https://github.com/NeoDOS-Project/NeoTools',
        },
        {
          name: 'neodos-dev-server',
          tag: 'Herramientas',
          description: 'Servidor LSP + servidor MCP + toolkit compartido para el desarrollo del SO.',
          url: 'https://github.com/NeoDOS-Project/neodos-dev-server',
        },
      ],
    },
    cta: {
      eyebrow: 'Código abierto',
      title: 'El código es la verdad.',
      body: 'La documentación explica el diseño; el código lo demuestra. Explora el kernel, sigue el roadmap o abre un issue con tu idea.',
      primary: 'Explorar el repositorio',
      secondary: 'Ver el roadmap',
    },
  },
  architecture: {
    meta: {
      title: 'Arquitectura',
      description:
        'Arquitectura de NeoDOS: cinco capas verticales, Object Manager, scheduler SMP, memoria, seguridad NT6, drivers NEM aislados y NeoFS v2.',
    },
    hero: {
      eyebrow: 'Arquitectura',
      titleA: 'Cinco capas.',
      titleB: 'Un Object Manager.',
      lead: 'NeoDOS combina un kernel monolítico con un subsistema de drivers aislado estilo microkernel. Las dependencias solo fluyen hacia abajo y las interfaces críticas están congeladas por contrato.',
      badges: ['kernel híbrido', 'Ring 0 mínimo', 'ABI v8'],
    },
    boot: {
      eyebrow: 'Boot flow',
      title: 'De UEFI a NeoShell',
      lead: 'El firmware carga el bootloader desde la ESP, este carga el kernel ELF y la imagen NeoFS en memoria, captura el mapa UEFI final y salta al kernel con un BootInfo.',
      codeTitle: 'text — secuencia de arranque',
      code: `UEFI Firmware (OVMF)
  └─ GPT → ESP → /EFI/BOOT/BOOTX64.EFI
       ↓
NeoDOS Bootloader (UEFI application)
  ├─ GOP framebuffer + logging
  ├─ carga kernel.elf y sus segmentos PT_LOAD
  ├─ carga la imagen NeoFS como RAM disk
  └─ ExitBootServices + BootInfo → kernel entry
       ↓
NeoDOS Kernel (x86_64-unknown-none)
  ├─ 31 fases: GDT/IDT, memoria, Ob, SMP, drivers...
  ├─ monta NeoFS en C: y FAT32 ESP en A:
  ├─ self-tests del kernel (937)
  └─ arranca servicios en orden de dependencia
       ↓
NeoInit (PID 1) → NeoShell (Ring 3)`,
      cards: [
        {
          title: 'Bootloader',
          body: 'Aplicación UEFI que inicializa GOP, carga el kernel y la imagen de disco, sale de Boot Services y entrega el mapa de memoria definitivo.',
        },
        {
          title: 'Kernel',
          body: '31 fases de inicialización ordenadas: CPU, memoria, Object Manager, SMP, almacenamiento, drivers, red, registry y servicios.',
        },
        {
          title: 'Userland',
          body: 'NeoInit arranca como PID 1 y lanza NeoShell en Ring 3. Cada comando interactivo es un binario .NXE, no una shell en Ring 0.',
        },
      ],
    },
    layers: {
      eyebrow: 'Capas',
      title: 'Separación estricta de responsabilidades',
      lead: 'Un módulo pertenece a una única capa y solo puede depender de las capas inferiores. La regla se verifica automáticamente en cada build.',
      items: [
        {
          name: 'Arch (x86_64)',
          text: 'GDT, IDT, paginación de 4 niveles, trampolín SMP y todo el ensamblador del sistema. Es la única capa que toca el hardware directamente.',
        },
        {
          name: 'HAL v0.4',
          text: 'Separación raw/safe con 26 primitivas extern "C". El ensamblador queda confinado detrás de una interfaz estable que el resto del kernel consume.',
        },
        {
          name: 'System Services',
          text: 'Scheduler con 4 prioridades, memoria buddy + slab, Object Manager, VFS, IPC/pipes, IRP asíncrono, Event Bus y el modelo de seguridad NT6.',
        },
        {
          name: 'NEM Driver Runtime',
          text: 'Pipeline de certificación en 8 estados, 12 flags de capacidades, aislamiento X4 con 16 slots de 1 MB y ABI versionada por driver.',
        },
        {
          name: 'Syscall SSDT',
          text: 'SSDT RAX 0–99 con tabla de 256 slots, dispatch O(1) y una tabla de permisos separada de la de handlers.',
        },
      ],
      calloutTitle: 'Regla de dependencias.',
      calloutBody:
        'El flujo es siempre descendente: SSDT → system services → HAL → arch. neodev check-deps falla el build si una capa importa algo que no le corresponde.',
    },
    subsystems: {
      eyebrow: 'Subsistemas',
      title: 'Qué hay dentro del kernel',
      lead: 'Cada subsistema tiene su propio documento de diseño y sus propios tests. Ninguno depende de detalles internos de otro.',
      items: [
        {
          icon: 'box',
          title: 'Object Manager',
          text: 'Abstracción central del sistema: tipos de objeto, namespace, handles, URN y seguridad. Procesos, archivos, dispositivos, timers y servicios son objetos con nombre.',
        },
        {
          icon: 'cpu',
          title: 'Scheduler',
          text: 'Cuatro prioridades con aging y work stealing. Runqueues por CPU y un punto de commit explícito: SELECT → VALIDATE FRAME → COMMIT → DISPATCH.',
        },
        {
          icon: 'memory',
          title: 'Memoria',
          text: 'Frame allocator buddy sobre el mapa UEFI, slab con caché caliente por CPU, demand paging y mmap sobre paginación de 4 niveles.',
        },
        {
          icon: 'layers',
          title: 'IPC e I/O',
          text: 'Pipes, IRP asíncrono, work queue y Event Bus. KWait unifica las esperas del kernel para evitar mecanismos ad-hoc por subsistema.',
        },
        {
          icon: 'shield',
          title: 'Seguridad',
          text: 'Modelo NT6 con SID, Token, ACL, ACE y SeAccessCheck. Cada acceso a un objeto pasa por una comprobación explícita de privilegios.',
        },
        {
          icon: 'gear',
          title: 'Drivers NEM',
          text: 'Drivers standalone certificados en 8 estados, con 12 capacidades explícitas y aislamiento en 16 slots de 1 MB. El kernel no confía en ellos.',
        },
        {
          icon: 'disk',
          title: 'Filesystem',
          text: 'NeoFS v2 con copy-on-write, VFS e IoStack, page cache con hash + LRU, y FAT32 para la ESP de arranque.',
        },
        {
          icon: 'network',
          title: 'Red',
          text: 'Stack TCP/IP con sockets, ARP, DHCP y DNS. Los NIC se integran mediante drivers NEM y los dispositivos se exponen como objetos.',
        },
      ],
    },
    objects: {
      eyebrow: 'Organización',
      title: 'Un modelo orientado a objetos',
      lead: 'El Object Manager (Ob) es la abstracción central. Las syscalls operan sobre Ob handles y toda syscall nueva debe ser sys_ob_*.',
      bullets: [
        'Handles con permisos por objeto, no descriptores globales.',
        'Namespace jerárquico: \\Device, \\Registry, \\Service, \\Global.',
        'Objetos tipados con clases de información consultables y mutables.',
        'Seguridad integrada: cada handle se valida contra el token del proceso.',
      ],
      codeTitle: 'text — syscalls SSDT',
      code: `RAX 0–99   → tabla SSDT de 256 slots
dispatch    → O(1), sin búsqueda lineal
permisos    → tabla separada de la de handlers
contrato    → ABI v8 congelada

# Toda syscall nueva:
sys_ob_*  → recibe/devuelve Ob handles
          → nunca punteros crudos al kernel

# Verificación
neodev check-deps
neodev test`,
    },
    disk: {
      eyebrow: 'Almacenamiento',
      title: 'Todo el sistema cabe en una imagen GPT',
      lead: 'NeoDev genera una única imagen de disco con tabla GUID: una ESP FAT32 para el bootloader y el kernel, y una partición NeoFS para el sistema.',
      headers: { region: 'Región', content: 'Contenido' },
      rows: [
        { range: 'LBA 0', content: 'MBR protector' },
        { range: 'LBA 1–33', content: 'GPT header + tabla de particiones' },
        { range: 'LBA 34–2047', content: 'Alineación' },
        { range: 'LBA 2048–206847', content: 'ESP / FAT32 — bootloader.efi + kernel.elf' },
        { range: 'LBA 206848–227327', content: 'NeoDOS — sistema de archivos NeoFS' },
        { range: 'Final', content: 'GPT de respaldo' },
      ],
      calloutTitle: 'Proyecto experimental.',
      calloutBody:
        'NeoDOS no busca compatibilidad binaria con Linux ni Windows, ni reemplazarlos en producción. Es una plataforma de investigación y aprendizaje.',
    },
    invariants: {
      eyebrow: 'Invariantes',
      title: 'Las reglas que no se negocian',
      items: [
        {
          title: 'Código es la verdad',
          body: 'La documentación explica el diseño, no replica el código. Si la arquitectura cambia, los docs se actualizan en el mismo cambio.',
        },
        {
          title: 'Los tests son especificación',
          body: '937 tests no son una métrica: son la especificación ejecutable del comportamiento del kernel. Si no hay test, el comportamiento no está definido.',
        },
        {
          title: 'La compatibilidad es un contrato',
          body: 'Una vez que una syscall, una estructura ABI o un formato de driver se declara estable, no cambia. El versionado semántico aplica al kernel.',
        },
        {
          title: 'Sin shell en Ring 0',
          body: 'Todo lo que puede vivir en Ring 3, vive en Ring 3. El kernel proporciona mecanismos; las políticas y los comandos pertenecen al userland.',
        },
      ],
      primary: 'Documentación de arquitectura',
      secondary: 'Source of truth',
    },
  },
  gettingStarted: {
    meta: {
      title: 'Empezar',
      description:
        'Compila y arranca NeoDOS: requisitos, instalación de NeoDev, build de la imagen GPT, ejecución en QEMU y suite de tests.',
    },
    hero: {
      eyebrow: 'Empezar',
      titleA: 'Compila el kernel.',
      titleB: 'Arranca el sistema.',
      lead: 'NeoDOS se compila en Linux con Rust nightly y arranca en QEMU con OVMF. NeoDev se encarga del bootloader, la imagen GPT, el userland y los tests.',
      badges: ['Rust nightly', 'QEMU + OVMF', 'Experimental'],
    },
    step1: {
      eyebrow: 'Paso 1',
      title: 'Prepara el entorno',
      lead: 'Necesitas un host Linux, Rust nightly con los targets bare-metal y las herramientas de virtualización.',
      requirements: [
        'Rust nightly + los targets x86_64-unknown-none y x86_64-unknown-uefi',
        'QEMU (system x86_64) y el firmware OVMF',
        'util-linux (sfdisk) para generar la tabla GPT',
        'GDB, opcional, para depurar el kernel en :1234',
        'git y GitHub CLI si vas a clonar y colaborar',
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
      eyebrow: 'Paso 2',
      title: 'Instala NeoDev',
      lead: 'NeoDev es el toolchain externo del proyecto. Compila cada componente con el target correcto, genera la imagen de disco y orquesta QEMU y los tests.',
      codeTitle: 'bash — instalación de NeoDev',
      code: `cargo install --git https://github.com/NeoDOS-Project/NeoDev.git

# Comprueba que está disponible
neodev --help`,
      note: 'NeoDev todavía no publica releases en crates.io. La instalación recomendada es desde el repositorio Git, donde también puedes fijar una revisión concreta.',
    },
    step3: {
      eyebrow: 'Paso 3',
      title: 'Clona y arranca',
      lead: 'El repositorio principal contiene el kernel, el bootloader, los drivers, el userland y la documentación.',
      codeTitle: 'bash — build, run y test',
      code: `gh repo clone NeoDOS-Project/NeoDOS
cd NeoDOS

# kernel + bootloader + userland + imagen GPT
neodev build --image

# QEMU + OVMF + GDB :1234
neodev run

# suite de tests (937/937)
neodev test`,
      calloutTitle: 'Reconstruye la imagen antes de testear.',
      calloutBody:
        'neodev test carga el kernel.elf de la raíz del proyecto. Si tras un arranque interactivo el disk_image.img queda sucio, ejecuta neodev build --image y repite los tests.',
    },
    reference: {
      eyebrow: 'Referencia',
      title: 'Comandos de NeoDev',
      lead: 'Los comandos se ejecutan desde la raíz del repositorio y leen la configuración de neodev.toml.',
      headers: { command: 'Comando', description: 'Descripción' },
      commands: [
        { cmd: 'neodev build --image', desc: 'Compila bootloader, kernel, userland y genera la imagen GPT completa.' },
        { cmd: 'neodev build --quick --image', desc: 'Recompilación incremental del kernel + bootloader + imagen.' },
        { cmd: 'neodev run', desc: 'Arranca QEMU con OVMF, consola serie y GDB escuchando en :1234.' },
        { cmd: 'neodev test', desc: 'Ejecuta la suite automatizada del kernel (937 tests).' },
        { cmd: 'neodev list', desc: 'Descubre los proyectos del workspace y sus targets.' },
        { cmd: 'neodev check-deps', desc: 'Verifica que las dependencias entre capas solo fluyan hacia abajo.' },
        { cmd: 'neodev clean', desc: 'Elimina artefactos de build e imágenes generadas.' },
      ],
    },
    config: {
      eyebrow: 'Configuración',
      title: 'Ajusta la máquina virtual',
      lead: 'neodev.toml define el tamaño de las particiones, la memoria, las CPUs y la ruta del firmware OVMF. Por defecto: 512 MB de RAM, 2 CPUs y red en modo usuario.',
      body: 'Si prefieres VirtualBox, el repositorio incluye una guía específica de configuración y arranque.',
      qemu: 'Guía de QEMU',
      virtualbox: 'Guía de VirtualBox',
      codeTitle: 'toml — neodev.toml (extracto)',
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
      eyebrow: 'Siguiente paso',
      title: 'Lee el roadmap antes de tocar el kernel.',
      body: 'Cada feature, fix o refactor vive en su propia rama y referencia un issue. GitHub Issues es el sistema oficial de planificación.',
      primary: 'Ver el roadmap',
      secondary: 'Contribuir',
    },
  },
  roadmap: {
    meta: {
      title: 'Roadmap',
      description:
        'Roadmap de NeoDOS: fases v0.50 a v1.0, hitos del kernel, ecosistema de usuario, hardening y objetivos post-1.0.',
    },
    hero: {
      eyebrow: 'Roadmap',
      titleA: 'De prototipo funcional',
      titleB: 'a API estable.',
      lead: 'El roadmap se organiza en fases y milestones con objetivos técnicos claros, dependencias verificadas y prioridades justificadas. GitHub Issues es la fuente de verdad de planificación.',
      badges: ['v0.51.5 actual', 'v1.0 · ABI congelada', 'issues = SSOT'],
    },
    map: {
      eyebrow: 'Mapa de versiones',
      title: 'Cinco fases hasta v1.0',
      lead: 'Cada versión es un milestone. Cuando todas sus issues están cerradas, la versión está terminada y el changelog se genera desde los milestones.',
    },
    phases: [
      {
        id: 'F0',
        title: 'Consolidación',
        versions: 'v0.50',
        state: 'Completada',
        tone: 'done',
        active: false,
        description: 'Cerrar las iniciativas en curso antes de abrir frentes nuevos.',
        items: ['Shell: tokenizer + quoting', 'Power Phase 2 + hardening', 'NLTv3 i18n + formatos regionales (v0.51.3)'],
      },
      {
        id: 'F1',
        title: 'Kernel maduro',
        versions: 'v0.51 – v0.55',
        state: 'En curso',
        tone: 'active',
        active: true,
        description: 'Eliminar deuda técnica estructural y estabilizar la base para el ecosistema de usuario.',
        items: [
          'NeoFS v2: B-tree COW, free list, snapshots y mkfs',
          'Shell Phase 2: editor, historial, pipes y scripting',
          'SAM, herramientas de red y administración',
          'VirtIO, sesiones, seguridad de FS y zero-copy',
          'Registry WAL, Secure Boot, module signing y tracing',
        ],
      },
      {
        id: 'F2',
        title: 'Ecosistema de usuario',
        versions: 'v0.56 – v0.60',
        state: 'Planificada',
        tone: 'planned',
        active: false,
        description: 'Completar herramientas oficiales, el modelo Executive NT y el sistema de instalación.',
        items: ['NXE/NXP ecosystem completion', 'Executive Manager', 'Herramientas oficiales', 'Instalación y bootstrap'],
      },
      {
        id: 'F3',
        title: 'Seguridad y estabilidad',
        versions: 'v0.61 – v0.69',
        state: 'Planificada',
        tone: 'planned',
        active: false,
        description: 'Hardening completo pre-v1.0: auditorías, fuzzing, rendimiento y cobertura de tests.',
        items: [
          'Auditoría de seguridad del kernel',
          'Fuzzing de syscalls y drivers NEM',
          'ASLR v2/v3, NX stack y heap',
          'Performance y cobertura de tests',
        ],
      },
      {
        id: 'F4',
        title: 'Primera API estable',
        versions: 'v1.0',
        state: 'Objetivo',
        tone: 'goal',
        active: false,
        description: 'Congelar la ABI: todo lo que se estabiliza en v1.0 no cambia hasta v2.0.',
        items: [
          'Syscalls 0–99 y NEM v3 congelados',
          'Formato NXE/NXP y NeoFS v2 estables',
          'Documentación y guía de migración',
          'Todos los binarios contra la ABI final',
        ],
      },
    ],
    future: {
      eyebrow: 'Después de v1.0',
      title: 'Hacia dónde va el proyecto',
      lead: 'La ABI mayor cambia por versión mayor. Las versiones intermedias añaden capacidades compatibles sin romper contratos.',
      headers: { version: 'Versión', focus: 'Enfoque', examples: 'Ejemplos' },
      rows: [
        { version: 'v1.x', focus: 'Mantenimiento y features compatibles', examples: 'Bugfixes, nuevas syscalls, VirtIO GPU/Sound, rendimiento' },
        { version: 'v2.x', focus: 'Red y virtualización', examples: 'IPv6, VLAN, firewall, KVM enlightenments, servicios de red' },
        { version: 'v3.x', focus: 'GUI y experiencia de usuario', examples: 'Compositor 2D, NeoStore, gráficos 3D, escritorio' },
        { version: 'v4.x', focus: 'Escalabilidad enterprise', examples: 'NUMA, clustering, alta disponibilidad, TPM 2.0, iSCSI' },
      ],
    },
    method: {
      eyebrow: 'Metodología',
      title: 'Cómo se trabaja en NeoDOS',
      cards: [
        {
          icon: 'git',
          title: 'Una rama por tarea',
          body: 'Features, fixes, refactors, auditorías e investigaciones viven en ramas dedicadas (feat/, fix/, docs/…). Nunca se trabaja directamente sobre develop.',
        },
        {
          icon: 'book',
          title: 'Issues como fuente de verdad',
          body: 'Las ideas se convierten en issues con criterios de aceptación. Un issue solo se cierra cuando todos sus checkboxes están marcados.',
        },
        {
          icon: 'check',
          title: 'Verificación antes de commit',
          body: 'Build, neodev test, check-deps, skills y markdownlint deben pasar antes de abrir un pull request.',
        },
      ],
      primary: 'Roadmap completo',
      secondary: 'Ver issues abiertas',
    },
  },
  resources: {
    meta: {
      title: 'Recursos',
      description:
        'Repositorios y documentación de NeoDOS para contribuidores: arquitectura, syscalls, drivers, filesystem, testing y herramientas.',
    },
    hero: {
      eyebrow: 'Recursos',
      titleA: 'Todo lo que necesitas',
      titleB: 'para empezar.',
      lead: 'Repositorios, documentación y puntos de entrada para contribuidores y lectores curiosos.',
      badges: ['Licencia MIT', 'Código abierto', 'Rust'],
    },
    repos: {
      eyebrow: 'Repositorios',
      title: 'El ecosistema NeoDOS',
      lead: 'Repositorios independientes, un solo sistema. Empieza por el repositorio principal y sigue la documentación desde ahí.',
    },
    repoList: [
      {
        name: 'NeoDOS-Project/NeoDOS',
        tag: 'Principal',
        description: 'Kernel, bootloader, drivers, userland, herramientas, docs y roadmap.',
        url: 'https://github.com/NeoDOS-Project/NeoDOS',
      },
      {
        name: 'NeoDOS-Project/NeoDev',
        tag: 'Toolchain',
        description: 'Toolchain unificado de build, imagen, ejecución, tests y CI.',
        url: 'https://github.com/NeoDOS-Project/NeoDev',
      },
      {
        name: 'NeoDOS-Project/NeoTools',
        tag: 'Herramientas',
        description: 'Herramientas de host para analizar binarios NeoDOS: nxeinfo, nxpkg y nxdump.',
        url: 'https://github.com/NeoDOS-Project/NeoTools',
      },
      {
        name: 'NeoDOS-Project/neodos-dev-server',
        tag: 'Herramientas',
        description: 'Servidor LSP + servidor MCP + toolkit compartido para el desarrollo de NeoDOS.',
        url: 'https://github.com/NeoDOS-Project/neodos-dev-server',
      },
      {
        name: 'NeoDOS-Project/.github',
        tag: 'Comunidad',
        description: 'Archivos de salud comunitaria, plantillas de issues y de pull requests.',
        url: 'https://github.com/NeoDOS-Project/.github',
      },
      {
        name: 'alexis900/neodos-web',
        tag: 'Web',
        description: 'Código fuente de este sitio, construido con Astro y desplegado en GitHub Pages.',
        url: 'https://github.com/alexis900/neodos-web',
      },
    ],
    docs: {
      eyebrow: 'Documentación',
      title: 'Lee la fuente de verdad',
      lead: 'La arquitectura, las syscalls, los drivers y el testing están documentados en el repositorio. Estos son los mejores puntos de entrada.',
      links: [
        { label: 'Índice de documentación', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/README.md' },
        { label: 'Visión de arquitectura', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/architecture/overview.md' },
        { label: 'Source of truth · invariantes', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/architecture/source-of-truth.md' },
        { label: 'Referencia de syscalls', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/kernel/syscalls.md' },
        { label: 'Object Manager', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/kernel/objects.md' },
        { label: 'Drivers y formato NEM', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/drivers/overview.md' },
        { label: 'Filesystem y NeoFS', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/filesystem/overview.md' },
        { label: 'Flujo de arranque', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/boot/boot-flow.md' },
        { label: 'Guía de testing', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/development/testing.md' },
        { label: 'Depuración con GDB', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/development/debugging.md' },
        { label: 'Configuración de QEMU', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/development/qemu.md' },
        { label: 'Configuración de VirtualBox', href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/docs/development/virtualbox.md' },
      ],
    },
    contribute: {
      eyebrow: 'Contribuir',
      title: 'Únete al proyecto',
      lead: 'NeoDOS tiene licencia MIT y se desarrolla en abierto. Lee la guía de contribución, revisa las issues abiertas y abre un pull request desde una rama dedicada.',
      cards: [
        {
          icon: 'book',
          title: 'Guía de contribución',
          body: 'Workflow, nombres de ramas, convenciones de commit y checklist de verificación.',
          href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/CONTRIBUTING.md',
          action: 'Leer CONTRIBUTING.md',
        },
        {
          icon: 'git',
          title: 'Issues abiertas',
          body: 'Bugs, peticiones de features e issues de seguimiento. Cada tarea empieza con un issue.',
          href: 'https://github.com/NeoDOS-Project/NeoDOS/issues',
          action: 'Explorar issues',
        },
        {
          icon: 'external',
          title: 'Changelog y releases',
          body: 'Qué cambió en cada versión y hacia dónde va el proyecto.',
          href: 'https://github.com/NeoDOS-Project/NeoDOS/blob/develop/CHANGELOG.md',
          action: 'Leer el changelog',
        },
      ],
    },
    cta: {
      eyebrow: 'Empieza a construir',
      title: 'El kernel te está esperando.',
      body: 'Instala el toolchain, genera la imagen y arranca NeoDOS en QEMU en unos minutos.',
      primary: 'Empezar',
      secondary: 'Ver el repositorio',
    },
  },
  notFound: {
    title: 'Página no encontrada',
    description: 'La página que buscas no existe.',
    heading: '404 — Página no encontrada',
    body: 'La página que buscas no existe o se ha movido.',
    english: 'Home en inglés',
    spanish: 'Inicio en español',
  },
};
