--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Homebrew)
-- Dumped by pg_dump version 14.8 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Defensas; Type: TABLE; Schema: public; Owner: bdt2
--

CREATE TABLE public."Defensas" (
    id integer NOT NULL,
    defensa text NOT NULL
);


ALTER TABLE public."Defensas" OWNER TO bdt2;

--
-- Name: Defensas_reinos; Type: TABLE; Schema: public; Owner: bdt2
--

CREATE TABLE public."Defensas_reinos" (
    id_reinos integer NOT NULL,
    id_defensas integer NOT NULL
);


ALTER TABLE public."Defensas_reinos" OWNER TO bdt2;

--
-- Name: Diplomacias; Type: TABLE; Schema: public; Owner: bdt2
--

CREATE TABLE public."Diplomacias" (
    id_reino_1 integer NOT NULL,
    id_reino_2 integer NOT NULL,
    es_aliado boolean
);


ALTER TABLE public."Diplomacias" OWNER TO bdt2;

--
-- Name: Karts; Type: TABLE; Schema: public; Owner: bdt2
--

CREATE TABLE public."Karts" (
    id integer NOT NULL,
    modelo text NOT NULL,
    color text NOT NULL,
    velocidad_maxima integer,
    id_personaje integer NOT NULL
);


ALTER TABLE public."Karts" OWNER TO bdt2;

--
-- Name: Personaje_habita_reino; Type: TABLE; Schema: public; Owner: bdt2
--

CREATE TABLE public."Personaje_habita_reino" (
    id_personaje integer NOT NULL,
    id_reino integer NOT NULL,
    fecha_registro text NOT NULL,
    es_gobernante boolean NOT NULL
);


ALTER TABLE public."Personaje_habita_reino" OWNER TO bdt2;

--
-- Name: Personaje_tiene_trabajo; Type: TABLE; Schema: public; Owner: bdt2
--

CREATE TABLE public."Personaje_tiene_trabajo" (
    id_trabajo integer NOT NULL,
    id_personaje integer NOT NULL,
    fecha_inicio text NOT NULL,
    fecha_termino text
);


ALTER TABLE public."Personaje_tiene_trabajo" OWNER TO bdt2;

--
-- Name: Personajes; Type: TABLE; Schema: public; Owner: bdt2
--

CREATE TABLE public."Personajes" (
    id integer NOT NULL,
    nombre text NOT NULL,
    fuerza integer NOT NULL,
    fecha_nacimiento text NOT NULL,
    objeto text
);


ALTER TABLE public."Personajes" OWNER TO bdt2;

--
-- Name: Reinos; Type: TABLE; Schema: public; Owner: bdt2
--

CREATE TABLE public."Reinos" (
    id integer NOT NULL,
    nombre text NOT NULL,
    ubicacion text NOT NULL,
    superficie integer NOT NULL
);


ALTER TABLE public."Reinos" OWNER TO bdt2;

--
-- Name: Trabajos; Type: TABLE; Schema: public; Owner: bdt2
--

CREATE TABLE public."Trabajos" (
    id integer NOT NULL,
    descripcion text NOT NULL,
    sueldo integer NOT NULL
);


ALTER TABLE public."Trabajos" OWNER TO bdt2;

--
-- Data for Name: Defensas; Type: TABLE DATA; Schema: public; Owner: bdt2
--

COPY public."Defensas" (id, defensa) FROM stdin;
251	defensa 1
271	defensa 2
211	defensa 7
291	defensa 4
\.


--
-- Data for Name: Defensas_reinos; Type: TABLE DATA; Schema: public; Owner: bdt2
--

COPY public."Defensas_reinos" (id_reinos, id_defensas) FROM stdin;
\.


--
-- Data for Name: Diplomacias; Type: TABLE DATA; Schema: public; Owner: bdt2
--

COPY public."Diplomacias" (id_reino_1, id_reino_2, es_aliado) FROM stdin;
\.


--
-- Data for Name: Karts; Type: TABLE DATA; Schema: public; Owner: bdt2
--

COPY public."Karts" (id, modelo, color, velocidad_maxima, id_personaje) FROM stdin;
\.


--
-- Data for Name: Personaje_habita_reino; Type: TABLE DATA; Schema: public; Owner: bdt2
--

COPY public."Personaje_habita_reino" (id_personaje, id_reino, fecha_registro, es_gobernante) FROM stdin;
\.


--
-- Data for Name: Personaje_tiene_trabajo; Type: TABLE DATA; Schema: public; Owner: bdt2
--

COPY public."Personaje_tiene_trabajo" (id_trabajo, id_personaje, fecha_inicio, fecha_termino) FROM stdin;
\.


--
-- Data for Name: Personajes; Type: TABLE DATA; Schema: public; Owner: bdt2
--

COPY public."Personajes" (id, nombre, fuerza, fecha_nacimiento, objeto) FROM stdin;
100	Princess Peach	100	1986-06-01 04:00:00	magia
500	Mario	80	1984-07-12	pistola de fuego
600	Luigi	80	1984-05-16	pistola de hielo
800	Champiñon	40	1990-04-04	flor
700	Bowser	150	1940-07-02	airship
200	Yoshi	60	1989-10-11	tortuga
\.


--
-- Data for Name: Reinos; Type: TABLE DATA; Schema: public; Owner: bdt2
--

COPY public."Reinos" (id, nombre, ubicacion, superficie) FROM stdin;
150	Reino Koopa	Planeta Champiñon	14000
130	Reino Urbano	Donk City	12000
190	Reino Chai	Luigi Land	9000
\.


--
-- Data for Name: Trabajos; Type: TABLE DATA; Schema: public; Owner: bdt2
--

COPY public."Trabajos" (id, descripcion, sueldo) FROM stdin;
61	champibar	6
71	limpiador estelar	8
31	amante Peach	10
\.


--
-- Name: Defensas_id_key; Type: INDEX; Schema: public; Owner: bdt2
--

CREATE UNIQUE INDEX "Defensas_id_key" ON public."Defensas" USING btree (id);


--
-- Name: Defensas_reinos_id_defensas_key; Type: INDEX; Schema: public; Owner: bdt2
--

CREATE UNIQUE INDEX "Defensas_reinos_id_defensas_key" ON public."Defensas_reinos" USING btree (id_defensas);


--
-- Name: Defensas_reinos_id_reinos_key; Type: INDEX; Schema: public; Owner: bdt2
--

CREATE UNIQUE INDEX "Defensas_reinos_id_reinos_key" ON public."Defensas_reinos" USING btree (id_reinos);


--
-- Name: Diplomacias_id_reino_1_key; Type: INDEX; Schema: public; Owner: bdt2
--

CREATE UNIQUE INDEX "Diplomacias_id_reino_1_key" ON public."Diplomacias" USING btree (id_reino_1);


--
-- Name: Diplomacias_id_reino_2_key; Type: INDEX; Schema: public; Owner: bdt2
--

CREATE UNIQUE INDEX "Diplomacias_id_reino_2_key" ON public."Diplomacias" USING btree (id_reino_2);


--
-- Name: Karts_id_key; Type: INDEX; Schema: public; Owner: bdt2
--

CREATE UNIQUE INDEX "Karts_id_key" ON public."Karts" USING btree (id);


--
-- Name: Personaje_habita_reino_id_personaje_key; Type: INDEX; Schema: public; Owner: bdt2
--

CREATE UNIQUE INDEX "Personaje_habita_reino_id_personaje_key" ON public."Personaje_habita_reino" USING btree (id_personaje);


--
-- Name: Personaje_habita_reino_id_reino_key; Type: INDEX; Schema: public; Owner: bdt2
--

CREATE UNIQUE INDEX "Personaje_habita_reino_id_reino_key" ON public."Personaje_habita_reino" USING btree (id_reino);


--
-- Name: Personaje_tiene_trabajo_id_personaje_key; Type: INDEX; Schema: public; Owner: bdt2
--

CREATE UNIQUE INDEX "Personaje_tiene_trabajo_id_personaje_key" ON public."Personaje_tiene_trabajo" USING btree (id_personaje);


--
-- Name: Personaje_tiene_trabajo_id_trabajo_key; Type: INDEX; Schema: public; Owner: bdt2
--

CREATE UNIQUE INDEX "Personaje_tiene_trabajo_id_trabajo_key" ON public."Personaje_tiene_trabajo" USING btree (id_trabajo);


--
-- Name: Personajes_id_key; Type: INDEX; Schema: public; Owner: bdt2
--

CREATE UNIQUE INDEX "Personajes_id_key" ON public."Personajes" USING btree (id);


--
-- Name: Reinos_id_key; Type: INDEX; Schema: public; Owner: bdt2
--

CREATE UNIQUE INDEX "Reinos_id_key" ON public."Reinos" USING btree (id);


--
-- Name: Trabajos_id_key; Type: INDEX; Schema: public; Owner: bdt2
--

CREATE UNIQUE INDEX "Trabajos_id_key" ON public."Trabajos" USING btree (id);


--
-- Name: Defensas_reinos Defensas_reinos_id_defensas_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bdt2
--

ALTER TABLE ONLY public."Defensas_reinos"
    ADD CONSTRAINT "Defensas_reinos_id_defensas_fkey" FOREIGN KEY (id_defensas) REFERENCES public."Defensas"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Defensas_reinos Defensas_reinos_id_reinos_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bdt2
--

ALTER TABLE ONLY public."Defensas_reinos"
    ADD CONSTRAINT "Defensas_reinos_id_reinos_fkey" FOREIGN KEY (id_reinos) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Diplomacias Diplomacias_id_reino_1_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bdt2
--

ALTER TABLE ONLY public."Diplomacias"
    ADD CONSTRAINT "Diplomacias_id_reino_1_fkey" FOREIGN KEY (id_reino_1) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Diplomacias Diplomacias_id_reino_2_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bdt2
--

ALTER TABLE ONLY public."Diplomacias"
    ADD CONSTRAINT "Diplomacias_id_reino_2_fkey" FOREIGN KEY (id_reino_2) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Karts Karts_id_personaje_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bdt2
--

ALTER TABLE ONLY public."Karts"
    ADD CONSTRAINT "Karts_id_personaje_fkey" FOREIGN KEY (id_personaje) REFERENCES public."Personajes"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Personaje_habita_reino Personaje_habita_reino_id_personaje_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bdt2
--

ALTER TABLE ONLY public."Personaje_habita_reino"
    ADD CONSTRAINT "Personaje_habita_reino_id_personaje_fkey" FOREIGN KEY (id_personaje) REFERENCES public."Personajes"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Personaje_habita_reino Personaje_habita_reino_id_reino_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bdt2
--

ALTER TABLE ONLY public."Personaje_habita_reino"
    ADD CONSTRAINT "Personaje_habita_reino_id_reino_fkey" FOREIGN KEY (id_reino) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Personaje_tiene_trabajo Personaje_tiene_trabajo_id_personaje_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bdt2
--

ALTER TABLE ONLY public."Personaje_tiene_trabajo"
    ADD CONSTRAINT "Personaje_tiene_trabajo_id_personaje_fkey" FOREIGN KEY (id_personaje) REFERENCES public."Personajes"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Personaje_tiene_trabajo Personaje_tiene_trabajo_id_trabajo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bdt2
--

ALTER TABLE ONLY public."Personaje_tiene_trabajo"
    ADD CONSTRAINT "Personaje_tiene_trabajo_id_trabajo_fkey" FOREIGN KEY (id_trabajo) REFERENCES public."Trabajos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

