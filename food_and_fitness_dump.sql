--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1 (Homebrew)
-- Dumped by pg_dump version 16.1 (Homebrew)

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
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: food_entries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.food_entries (
    food_entry_id integer NOT NULL,
    food_name character varying(255) NOT NULL,
    calories integer NOT NULL,
    entry_date timestamp with time zone NOT NULL
);


ALTER TABLE public.food_entries OWNER TO postgres;

--
-- Name: food_entries_food_entry_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.food_entries_food_entry_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.food_entries_food_entry_id_seq OWNER TO postgres;

--
-- Name: food_entries_food_entry_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.food_entries_food_entry_id_seq OWNED BY public.food_entries.food_entry_id;


--
-- Name: food_entries food_entry_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.food_entries ALTER COLUMN food_entry_id SET DEFAULT nextval('public.food_entries_food_entry_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20240130231502-create-food-entry.js
20240201192049-create_new_table.js
\.


--
-- Data for Name: food_entries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.food_entries (food_entry_id, food_name, calories, entry_date) FROM stdin;
1	Apple	52	2024-02-01 13:42:52.702-06
2	Banana	96	2024-02-01 13:42:52.702-06
3	Orange	62	2024-02-01 13:42:52.702-06
\.


--
-- Name: food_entries_food_entry_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.food_entries_food_entry_id_seq', 1, false);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: food_entries food_entries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.food_entries
    ADD CONSTRAINT food_entries_pkey PRIMARY KEY (food_entry_id);


--
-- PostgreSQL database dump complete
--

