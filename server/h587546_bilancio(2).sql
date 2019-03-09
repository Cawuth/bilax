-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Creato il: Nov 10, 2018 alle 23:01
-- Versione del server: 10.1.31-MariaDB-cll-lve
-- Versione PHP: 7.1.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `h587546_bilancio`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `tb_aziende`
--

CREATE TABLE `tb_aziende` (
  `id` int(11) NOT NULL,
  `id_utente` int(11) NOT NULL,
  `Partita_IVA` varchar(256) NOT NULL,
  `Ragione_Sociale` varchar(256) NOT NULL,
  `Citta` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `tb_bilancio`
--

CREATE TABLE `tb_bilancio` (
  `id` int(11) NOT NULL,
  `id_azienda` int(11) NOT NULL,
  `esercizio` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `tb_dati`
--

CREATE TABLE `tb_dati` (
  `id` int(11) NOT NULL,
  `id_bilancio` int(11) NOT NULL,
  `id_voce` int(11) NOT NULL,
  `valore` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `tb_utenti`
--

CREATE TABLE `tb_utenti` (
  `id` int(11) NOT NULL,
  `nome` varchar(256) NOT NULL,
  `user` varchar(256) NOT NULL,
  `pwd` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `tb_voci`
--

CREATE TABLE `tb_voci` (
  `id` int(11) NOT NULL,
  `descrizione_voce` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `tb_voci`
--

INSERT INTO `tb_voci` (`id`, `descrizione_voce`) VALUES
(1, 'STATO PATRIMONIALE ATTIVO'),
(2, 'A) Crediti verso soci per versamenti ancora dovuti'),
(3, '    Crediti verso soci già richiamati'),
(4, '    Crediti verso soci non ancora richiamati'),
(5, 'B) Immobilizzazioni, con separata indicazione di quelle concesse in locazione finanziaria'),
(6, '    I. Immateriali'),
(7, '        1) Costi di impianto e di ampliamento'),
(8, '            Costo storico'),
(9, '            (Fondo ammortamenti)'),
(10, '            (Fondo svalutazioni)'),
(11, '        2) Costi di ricerca, di sviluppo e di pubblicità'),
(12, '            Costo storico'),
(13, '            (Fondo ammortamenti)'),
(14, '            (Fondo svalutazioni)'),
(15, '        3) Diritti di brevetto industriale e di utilizzo di opere dell&rsquo;ingegno'),
(16, '            Costo storico'),
(17, '            (Fondo ammortamenti)'),
(18, '            (Fondo svalutazioni)'),
(19, '        4) Concessioni, licenze, marchi e diritti simili'),
(20, '            Costo storico'),
(15, '        3) Diritti di brevetto industriale e di utilizzo di opere dell&rsquo;ingegno'),
(16, '            Costo storico'),
(17, '            (Fondo ammortamenti)'),
(18, '            (Fondo svalutazioni)'),
(19, '        4) Concessioni, licenze, marchi e diritti simili'),
(20, '            Costo storico'),
(15, '        3) Diritti di brevetto industriale e di utilizzo di opere dell&rsquo;ingegno'),
(16, '            Costo storico'),
(17, '            (Fondo ammortamenti)'),
(18, '            (Fondo svalutazioni)'),
(19, '        4) Concessioni, licenze, marchi e diritti simili'),
(20, '            Costo storico'),
(20, '            Costo storico'),
(21, '            (Fondo ammortamenti)'),
(22, '            (Fondo svalutazioni)'),
(23, '        Differenza da consolidamento'),
(24, '        5) Avviamento'),
(25, '            Costo storico'),
(26, '            (Fondo ammortamenti)'),
(27, '            (Fondo svalutazioni)'),
(28, '        6) Immobilizzazioni immateriali in corso e acconti'),
(29, '        7) Altre'),
(30, '            Costo storico'),
(31, '            (Fondo ammortamenti)'),
(32, '            (Fondo svalutazioni)'),
(33, '    II. Materiali'),
(34, '        1) Terreni e fabbricati'),
(35, '            Costo storico'),
(36, '            (Fondo ammortamenti)'),
(37, '            (Fondo svalutazioni)'),
(38, '        2) Impianti e macchinario'),
(39, '            Costo storico'),
(40, '            (Fondo ammortamenti)'),
(41, '            (Fondo svalutazioni)'),
(42, '        3) Attrezzature industriali e commerciali'),
(43, '            Costo storico'),
(44, '            (Fondo ammortamenti)'),
(45, '            (Fondo svalutazioni)'),
(46, '        4) Altri beni'),
(47, '            Costo storico'),
(48, '            (Fondo ammortamenti)'),
(49, '            (Fondo svalutazioni)'),
(50, '        5) Immobilizzazioni in corso e acconti'),
(51, '        6) Concesse in Locazione Finanziaria'),
(52, '            Costo storico'),
(53, '            (Fondo ammortamenti)'),
(54, '            (Fondo svalutazioni)'),
(55, '    III. Finanziarie'),
(56, '        1) Partecipazioni in:'),
(57, '            a) imprese controllate'),
(58, '            b) imprese collegate'),
(59, '            c) imprese controllanti'),
(60, '            d) altre imprese'),
(61, '        2) Crediti'),
(62, '            a) verso imprese controllate'),
(63, '                - entro 12 mesi'),
(64, '                - oltre 12 mesi'),
(65, '            b) verso imprese collegate'),
(66, '                - entro 12 mesi'),
(67, '                - oltre 12 mesi'),
(68, '            c) verso imprese controllanti'),
(69, '                - entro 12 mesi'),
(70, '                - oltre 12 mesi'),
(71, '            d) verso altri'),
(72, '                - entro 12 mesi'),
(73, '                - oltre 12 mesi'),
(74, '        3) Altri titoli'),
(75, '        4) Azioni proprie'),
(76, '            Valore nominale complessivo'),
(77, '            Differenza dal valore nominale'),
(78, 'C) Attivo circolante'),
(79, '    I. Rimanenze'),
(80, '        1) Materie prime, sussidiarie e di consumo'),
(81, '        2) Prodotti in corso di lavorazione e semilavorati'),
(82, '        3) Lavori in corso su ordinazione'),
(83, '        4) Prodotti finiti e merci'),
(84, '        5) Acconti'),
(85, '    II. Crediti'),
(86, '        1) verso clienti'),
(87, '            - entro 12 mesi'),
(88, '            - oltre 12 mesi'),
(89, '        2) verso imprese controllate'),
(90, '            - entro 12 mesi'),
(91, '            - oltre 12 mesi'),
(92, '        3) verso imprese collegate'),
(93, '            - entro 12 mesi'),
(94, '            - oltre 12 mesi'),
(95, '        4) verso controllanti'),
(96, '            - entro 12 mesi'),
(97, '            - oltre 12 mesi'),
(98, '        4-bis) crediti tributari'),
(99, '            - entro 12 mesi'),
(100, '            - oltre 12 mesi'),
(101, '        4-ter) Imposte anticipate'),
(102, '            - entro 12 mesi'),
(103, '            - oltre 12 mesi'),
(104, '        5) verso altri'),
(105, '            - entro 12 mesi'),
(106, '            - oltre 12 mesi'),
(107, '    III. Attività finanziarie che non costituiscono immobilizzazioni'),
(108, '        1) Partecipazioni in imprese controllate'),
(109, '        2) Partecipazioni in imprese collegate'),
(110, '        3) Partecipazioni in imprese controllanti'),
(111, '        4) Altre partecipazioni'),
(112, '        5) Azioni proprie'),
(113, '            Valore nominale complessivo'),
(114, '            Differenza dal valore nominale'),
(115, '        6) Altri titoli'),
(116, '    IV. Disponibilità liquide'),
(117, '        1) Depositi bancari e postali'),
(118, '        2) Assegni'),
(119, '        3) Denaro e valori in cassa'),
(120, 'D) Ratei e risconti attivi'),
(121, '    Disaggio su prestiti'),
(122, '    Vari'),
(123, 'STATO PATRIMONIALE PASSIVO'),
(124, 'A) Patrimonio netto'),
(125, '    I. Capitale'),
(126, '    II. Riserva da sovrapprezzo delle azioni'),
(127, '    III. Riserva di rivalutazione'),
(128, '    IV. Riserva legale'),
(129, '    V. Riserve statutarie'),
(130, '    VI. Riserva per azioni proprie in portafoglio'),
(131, '    VII. Altre riserve, distintamente indicate:'),
(132, '        Riserva straordinaria o facoltativa'),
(133, '        Riserva per acquisto azioni proprie'),
(134, '        Riserva da deroghe ex art. 2423 Cod.Civ.'),
(135, '        Riserva azioni o quote della società controllante'),
(136, '        Riserva non distribuibile da rivalutazione delle partecipazioni'),
(137, '        Versamenti in conto aumento di capitale'),
(138, '        Versamenti in conto futuro aumento di capitale'),
(139, '        - Versamenti in conto capitale'),
(140, '        Versamenti a copertura perdite'),
(141, '        Riserva da riduzione capitale sociale'),
(142, '        Riserva avanzo di fusione'),
(143, '        Riserva per utili su cambi'),
(144, '        Varie altre riserve'),
(145, '            varie altre riserve'),
(146, '            - da arrotondamento automatico in Euro (2 decimali)'),
(147, '        - Riserva di conversione da consolidamento estero'),
(148, '        - Riserva di consolidamento'),
(149, '    VIII. Utili (perdite) portati a nuovo'),
(150, '    Utile (Perdita) Residua'),
(151, '        Utile (perdita) dell&rsquo;esercizio'),
(152, '        Copertura Parziale Perdita d&rsquo;Esercizio'),
(153, '    Patrimonio di Terzi'),
(154, '        Capitale e riserve di terzi'),
(155, '        Utile (perdita) dell&rsquo;esercizio di pertinenza di terzi'),
(156, 'B) Fondi per rischi e oneri'),
(157, '    1) Fondo per trattamento di quiescenza e obblighi simili'),
(158, '    2) Fondo per imposte, anche differite'),
(159, '    di consolidamento per rischi e oneri futuri'),
(160, '    3) Altri fondi'),
(161, 'C) Trattamento fine rapporto di lavoro subordinato'),
(162, 'D) Debiti'),
(163, '    1) Obbligazioni non convertibili'),
(164, '        - entro 12 mesi'),
(165, '        - oltre 12 mesi'),
(166, '    2) Obbligazioni convertibili'),
(167, '        - entro 12 mesi'),
(168, '        - oltre 12 mesi'),
(169, '    3) Debiti verso soci per finanziamenti'),
(170, '        - entro 12 mesi'),
(171, '        - oltre 12 mesi'),
(172, '    4) Debiti verso banche'),
(173, '        - entro 12 mesi'),
(174, '        - oltre 12 mesi'),
(175, '    5) Debiti verso altri finanziatori'),
(176, '        - entro 12 mesi'),
(177, '        - oltre 12 mesi'),
(178, '    6) Acconti'),
(179, '        - entro 12 mesi'),
(180, '        - oltre 12 mesi'),
(181, '    7) Debiti verso fornitori'),
(182, '        - entro 12 mesi'),
(183, '        - oltre 12 mesi'),
(184, '    8) Debiti rappresentati da titoli di credito'),
(185, '        - entro 12 mesi'),
(186, '        - oltre 12 mesi'),
(187, '    9) Debiti verso imprese controllate'),
(188, '        - entro 12 mesi'),
(189, '        - oltre 12 mesi'),
(190, '    10) Debiti verso imprese collegate'),
(191, '        - entro 12 mesi'),
(192, '        - oltre 12 mesi'),
(193, '    11) Debiti verso controllanti'),
(194, '        - entro 12 mesi'),
(195, '        - oltre 12 mesi'),
(196, '    12) Debiti tributari'),
(197, '        - entro 12 mesi'),
(198, '        - oltre 12 mesi'),
(199, '    13) Debiti verso istituti di previdenza e sicurezza sociale'),
(200, '        - entro 12 mesi'),
(201, '        - oltre 12 mesi'),
(202, '    14) Altri debiti'),
(203, '        - entro 12 mesi'),
(204, '        - oltre 12 mesi'),
(205, 'E) Ratei e risconti'),
(206, '    - aggio su prestiti'),
(207, '    - vari'),
(208, 'CONTI d&rsquo;ORDINE'),
(209, 'Rischi assunti dall&rsquo;impresa'),
(210, '    Fideiussioni'),
(211, '        a imprese controllate'),
(212, '        a imprese collegate'),
(213, '        a imprese controllanti'),
(214, '        a imprese controllate da controllanti'),
(215, '        ad altre imprese'),
(216, '    Avalli'),
(217, '        a imprese controllate'),
(218, '        a imprese collegate'),
(219, '        a imprese controllanti'),
(220, '        a imprese controllate da controllanti'),
(221, '        ad altre imprese'),
(222, '    Altre garanzie personali'),
(223, '        a imprese controllate'),
(224, '        a imprese collegate'),
(225, '        a imprese controllanti'),
(226, '        a imprese controllate da controllanti'),
(227, '        ad altre imprese'),
(228, '    Garanzie Reali'),
(229, '        a imprese controllate'),
(230, '        a imprese collegate'),
(231, '        a imprese controllanti'),
(232, '        a imprese controllate da controllanti'),
(233, '        ad altre imprese'),
(234, '    Altri Rischi'),
(235, '        crediti ceduti pro solvendo'),
(236, '        altri'),
(237, 'Impegni Assunti dall&rsquo;impresa'),
(238, 'Beni di terzi presso l&rsquo;impresa'),
(239, '    merci in conto lavorazione'),
(240, '    beni presso l&rsquo;impresa a titolo di deposito o comodato'),
(241, '    beni presso l&rsquo;impresa in pegno o cauzione'),
(242, '    altro'),
(243, 'Altri conti d&rsquo;ordine'),
(244, 'CONTO ECONOMICO'),
(245, 'A) Valore della produzione'),
(246, '    1) Ricavi delle vendite e delle prestazioni'),
(247, '    2) Variazione rimanenze prodotti in corso di lavor., semilavorati e finiti'),
(248, '    3) Variazione dei lavori in corso su ordinazione'),
(249, '    4) Incrementi di immobilizzazioni per lavori interni'),
(250, '    5) Altri ricavi e proventi:'),
(251, '        - Vari'),
(252, '        - Contributi in conto esercizio'),
(253, 'B) Costi della produzione'),
(254, '    6) Acquisti materie prime, sussidiarie, di consumo e di merci'),
(255, 'MARGINE LORDO'),
(256, '    7) Spese per prestazioni di servizi'),
(257, '    8) Spese per godimento di beni di terzi'),
(258, '    9) Costi del personale'),
(259, '        a) Salari, stipendi'),
(260, '        b) Oneri sociali'),
(261, '        c) Trattamento Fine Rapporto'),
(262, '        d) Trattamento di quiescenza e simili'),
(263, '        e) Altri costi'),
(264, 'EBITDA (MOL)'),
(265, '    10) Ammortamenti e svalutazioni'),
(266, '        a) Ammortamento delle immobilizzazioni immateriali'),
(267, '        b) Ammortamento delle immobilizzazioni materiali'),
(268, '        c) Altre svalutazioni delle immobilizzazioni'),
(269, '        d) Svalutazione cred. del circol. e delle disponibilità liquide'),
(270, '    11) Variazioni rimanenze materie prime, sussid., di consumo e merci'),
(271, '    12) Accantonamenti per rischi'),
(272, '    13) Altri accantonamenti'),
(273, '    14) Oneri diversi di gestione'),
(274, 'RISULTATO OPERATIVO EBIT'),
(275, 'C) Proventi e oneri finanziari'),
(276, '    15) Proventi da partecipazioni'),
(277, '        - Imprese Controllate'),
(278, '        - Imprese Collegate'),
(279, '        - Altri'),
(280, '    16) Altri proventi finanziari'),
(281, '        a) da crediti iscritti nelle immobilizzazioni'),
(282, '            - da imprese controllate'),
(283, '            - da imprese collegate'),
(284, '            - da controllanti'),
(285, '            - altri'),
(286, '        b) da titoli iscritti nelle immobilizzazioni'),
(287, '        c) da titoli inscritti nell&rsquo;attivo circolante'),
(288, '        d) proventi finanziari diversi dai precedenti:'),
(289, '            - da imprese controllate'),
(290, '            - da imprese collegate'),
(291, '            - da imprese controllanti'),
(292, '            - altri proventi finanziari'),
(293, '    17) Interessi e altri oneri finanziari:'),
(294, '        - da imprese controllate'),
(295, '        - da imprese collegate'),
(296, '        - da imprese controllanti'),
(297, '        - altri'),
(298, '    17-bis) Utili e perdite su cambi'),
(299, 'D) Rettifiche di valore di attività finanziarie'),
(300, '    18) Rivalutazioni'),
(301, '        a) di partecipazioni'),
(302, '            con il metodo del patrimonio netto'),
(303, '            altre'),
(304, '        b) di immobilizzazioni finanziarie'),
(305, '        c) di titoli inscritti nell&rsquo;attivo circolante'),
(306, '    19) Svalutazioni'),
(307, '        a) di partecipazioni'),
(308, '            con il metodo del patrimonio netto'),
(309, '            altre'),
(310, '        b) di immobilizzazioni finanziarie'),
(311, '        c) di titoli inscritti nell&rsquo;attivo circolante'),
(312, 'E) Proventi e oneri straordinari'),
(313, '    20) Proventi straordinari'),
(314, '        - Plusvalenze non produzione'),
(315, '        - Varie'),
(316, '            - Varie'),
(317, '            - Proventi (Oneri) straordinari per redazione Bilancio in Euro (2 decimali)'),
(318, '    21) Oneri straordinari'),
(319, '        - Minusvalenze non produzione'),
(320, '        - Imposte su esercizi precedenti'),
(321, '        - Varie'),
(322, 'Risultato prima delle imposte'),
(323, '22) Imposte sul reddito dell&rsquo;esercizio'),
(324, '    a) Imposte correnti'),
(325, '    b) Imposte differite'),
(326, '    c) Imposte anticipate'),
(327, '    d) Proventi (oneri) da adesione al regime di consolidato fiscale / trasparenza fiscale'),
(328, '23) Utile (Perdita) dell&rsquo;esercizio'),
(329, 'Utile (perdita) dell&rsquo;esercizio di pertinenza di terzi'),
(330, 'Utile (perdita) dell&rsquo;esercizio di pertinenza per il gruppo');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `tb_aziende`
--
ALTER TABLE `tb_aziende`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `tb_bilancio`
--
ALTER TABLE `tb_bilancio`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `tb_dati`
--
ALTER TABLE `tb_dati`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `tb_utenti`
--
ALTER TABLE `tb_utenti`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
