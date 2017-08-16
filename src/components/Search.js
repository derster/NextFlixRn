import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  Dimensions,
  FlatList,
  ScrollView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window')
const show_first = [
   {
      "key":1,
      "name":"Suits",
      "image":"https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg",
      "details":{
         "numOfEpisodes":92,
         "year":2011,
         "season":7,
         "thumbnail":"https://static.tvmaze.com/uploads/images/original_untouched/70/176097.jpg",
         "description":"Suits delves into the fast-paced, high-stakes world of a top Manhattan corporate law firm where hotshot associate Harvey Specter makes a risky move by hiring Mike Ross a brilliant but unmotivated college dropout, as his associate. ",
         "cast":"Rick Hoffman, Patrick J. Adams, Meghan Markle, Gabriel Macht, Sarah Rafferty",
         "creator":"Aaron Korsh",
         "episodes": [
            {
                "id": 12493,
                "url": "https://www.tvmaze.com/episodes/12493/suits-1x01-pilot",
                "name": "Pilot",
                "season": 1,
                "number": 1,
                "airdate": "2011-06-23",
                "airtime": "22:00",
                "airstamp": "2011-06-23T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176097.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176097.jpg"
                },
                "summary": "In the premiere of this legal drama, successful lawyer Harvey Specter (Gabriel Macht) hires brilliant college dropout Mike Ross (Patrick J. Adams) as a new associate at a top law firm despite the fact that Mike doesn't have a degree. ",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12493"
                }
                }
            },
            {
                "id": 12495,
                "url": "https://www.tvmaze.com/episodes/12495/suits-1x02-errors-and-omissions",
                "name": "Errors and Omissions",
                "season": 1,
                "number": 2,
                "airdate": "2011-06-30",
                "airtime": "22:00",
                "airstamp": "2011-06-30T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176098.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176098.jpg"
                },
                "summary": "<p>Mike has an ethical dilemma when Louis forces him to make a decision that could hurt his relationship with Harvey. Elsewhere, Harvey's past comes back to haunt him during a case.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12495"
                }
                }
            },
            {
                "id": 12496,
                "url": "https://www.tvmaze.com/episodes/12496/suits-1x03-inside-track",
                "name": "Inside Track",
                "season": 1,
                "number": 3,
                "airdate": "2011-07-07",
                "airtime": "22:00",
                "airstamp": "2011-07-07T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176099.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176099.jpg"
                },
                "summary": "<p>Harvey goes rogue in order to fix a crisis with a client despite Jessica's desire to reign him in. Elsewhere, Mike turns to Rachel for guidance when he learns he'll be hosting a dinner for rookies, an important tradition at the firm.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12496"
                }
                }
            },
            {
                "id": 12497,
                "url": "https://www.tvmaze.com/episodes/12497/suits-1x04-dirty-little-secrets",
                "name": "Dirty Little Secrets",
                "season": 1,
                "number": 4,
                "airdate": "2011-07-14",
                "airtime": "22:00",
                "airstamp": "2011-07-14T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176100.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176100.jpg"
                },
                "summary": "<p>Harvey defends a figure from Jessica's past, making it difficult for Jessica to detach herself from the case. Elsewhere, Mike is eager to take on a pro bono case but soon learns it won't be an easy win.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12497"
                }
                }
            },
            {
                "id": 12498,
                "url": "https://www.tvmaze.com/episodes/12498/suits-1x05-bail-out",
                "name": "Bail Out",
                "season": 1,
                "number": 5,
                "airdate": "2011-07-21",
                "airtime": "22:00",
                "airstamp": "2011-07-21T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176101.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176101.jpg"
                },
                "summary": "<p>An old friend surfaces to ask Mike for help. Elsewhere, Harvey has a chance to close a lucrative deal or help his driver defend himself from a lawsuit.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12498"
                }
                }
            },
            {
                "id": 12499,
                "url": "https://www.tvmaze.com/episodes/12499/suits-1x06-tricks-of-the-trade",
                "name": "Tricks of the Trade",
                "season": 1,
                "number": 6,
                "airdate": "2011-07-28",
                "airtime": "22:00",
                "airstamp": "2011-07-28T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176102.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176102.jpg"
                },
                "summary": "<p>The guys defend a woman falsely accused of insider trading. Elsewhere, Mike helps Rachel study for the LSAT and realises she's close to discovering his secret.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12499"
                }
                }
            },
            {
                "id": 12500,
                "url": "https://www.tvmaze.com/episodes/12500/suits-1x07-play-the-man",
                "name": "Play The Man",
                "season": 1,
                "number": 7,
                "airdate": "2011-08-04",
                "airtime": "22:00",
                "airstamp": "2011-08-04T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176103.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176103.jpg"
                },
                "summary": "<p>Mike takes on Louis' protégé during a mock trial, but his conflict with Rachel could hurt his chances of winning. Elsewhere, Harvey works on a merger between two hotel chains, but his past with the opposing counsel complicates matters.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12500"
                }
                }
            },
            {
                "id": 12501,
                "url": "https://www.tvmaze.com/episodes/12501/suits-1x08-identity-crisis",
                "name": "Identity Crisis",
                "season": 1,
                "number": 8,
                "airdate": "2011-08-11",
                "airtime": "22:00",
                "airstamp": "2011-08-11T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176104.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176104.jpg"
                },
                "summary": "<p>Harvey and Louis are forced to work together to go after an investment firm that ripped off a nonprofit. But Louis, anxious to make a good impression, inadvertently hurts the case. Elsewhere, Mike tries to contain a modern-day Robin Hood whose actions are damaging a client's business.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12501"
                }
                }
            },
            {
                "id": 12502,
                "url": "https://www.tvmaze.com/episodes/12502/suits-1x09-undefeated",
                "name": "Undefeated",
                "season": 1,
                "number": 9,
                "airdate": "2011-08-18",
                "airtime": "22:00",
                "airstamp": "2011-08-18T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176105.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176105.jpg"
                },
                "summary": "<p>Harvey takes on an undefeated lawyer from Boston during a class-action lawsuit.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12502"
                }
                }
            },
            {
                "id": 12503,
                "url": "https://www.tvmaze.com/episodes/12503/suits-1x10-the-shelf-life",
                "name": "The Shelf Life",
                "season": 1,
                "number": 10,
                "airdate": "2011-08-25",
                "airtime": "22:00",
                "airstamp": "2011-08-25T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176106.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176106.jpg"
                },
                "summary": "<p>Mike questions the firing of an executive, whom Harvey dismissed at the request of a client.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12503"
                }
                }
            },
            {
                "id": 12504,
                "url": "https://www.tvmaze.com/episodes/12504/suits-1x11-rules-of-the-game",
                "name": "Rules Of The Game",
                "season": 1,
                "number": 11,
                "airdate": "2011-09-01",
                "airtime": "22:00",
                "airstamp": "2011-09-01T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176107.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176107.jpg"
                },
                "summary": "<p>Harvey's former mentor (Gary Cole) turns to his protégé when his office comes under investigation. Elsewhere, Mike and Louis try to settle a mogul's estate in the midst of family clashes; and Jenny worries that Mike is hiding something.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12504"
                }
                }
            },
            {
                "id": 12505,
                "url": "https://www.tvmaze.com/episodes/12505/suits-1x12-dog-fight",
                "name": "Dog Fight",
                "season": 1,
                "number": 12,
                "airdate": "2011-09-08",
                "airtime": "22:00",
                "airstamp": "2011-09-08T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176108.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176108.jpg"
                },
                "summary": "<p>In the first-series finale, Harvey tries to free an innocent man but hits a wall when he goes to the district attorney (Chi McBride), who seems more focused on preserving the system than seeking justice. Elsewhere, Trevor causes problems for Mike when he shows up on Mike's doorstep.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12505"
                }
                }
            },
            {
                "id": 12506,
                "url": "https://www.tvmaze.com/episodes/12506/suits-2x01-she-knows",
                "name": "She Knows",
                "season": 2,
                "number": 1,
                "airdate": "2012-06-14",
                "airtime": "22:00",
                "airstamp": "2012-06-14T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176109.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176109.jpg"
                },
                "summary": "<p>In the Series 2 opener, Mike is excited to close a big case for the firm but doesn't realise Trevor confronted Jessica. Meanwhile, Jessica's former partner resurfaces, prompting Harvey to reconsider what he's willing to do to protect Mike's secret.<br /></p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12506"
                }
                }
            },
            {
                "id": 12507,
                "url": "https://www.tvmaze.com/episodes/12507/suits-2x02-the-choice",
                "name": "The Choice",
                "season": 2,
                "number": 2,
                "airdate": "2012-06-21",
                "airtime": "22:00",
                "airstamp": "2012-06-21T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176110.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176110.jpg"
                },
                "summary": "<p>Jessica tries to drum up support in the firm and asks Harvey to help her with the task, but his ambition may produce more ill will than good. Elsewhere, Mike approaches Rachel about her message.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12507"
                }
                }
            },
            {
                "id": 12508,
                "url": "https://www.tvmaze.com/episodes/12508/suits-2x03-meet-the-new-boss",
                "name": "Meet the New Boss",
                "season": 2,
                "number": 3,
                "airdate": "2012-06-28",
                "airtime": "22:00",
                "airstamp": "2012-06-28T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176111.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176111.jpg"
                },
                "summary": "<p>Harvey and Daniel clash over a case, leaving Mike caught in the middle. Meanwhile, Mike must handle problems with the women in his life; and Louis meets a worthy opponent when trying to quell complaints about the way the firm treats its associates.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12508"
                }
                }
            },
            {
                "id": 12509,
                "url": "https://www.tvmaze.com/episodes/12509/suits-2x04-discovery",
                "name": "Discovery",
                "season": 2,
                "number": 4,
                "airdate": "2012-07-12",
                "airtime": "22:00",
                "airstamp": "2012-07-12T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176112.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176112.jpg"
                },
                "summary": "<p>Travis returns to town and takes aim at Harvey, causing trouble that Harvey and Jessica must hide from Daniel. Elsewhere, Louis and Mike become closer as friends, but Louis' paranoia threatens to ruin the new bond.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12509"
                }
                }
            },
            {
                "id": 12510,
                "url": "https://www.tvmaze.com/episodes/12510/suits-2x05-break-point",
                "name": "Break Point",
                "season": 2,
                "number": 5,
                "airdate": "2012-07-19",
                "airtime": "22:00",
                "airstamp": "2012-07-19T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176113.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176113.jpg"
                },
                "summary": "<p>Jessica takes the lead on a case that could have serious consequences for the firm, and Harvey has a hard time taking a backseat during the proceedings. Elsewhere, Mike works on a dispute between a tennis phenom and his trainer, who's also his father.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12510"
                }
                }
            },
            {
                "id": 12511,
                "url": "https://www.tvmaze.com/episodes/12511/suits-2x06-all-in",
                "name": "All In",
                "season": 2,
                "number": 6,
                "airdate": "2012-07-26",
                "airtime": "22:00",
                "airstamp": "2012-07-26T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176114.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176114.jpg"
                },
                "summary": "<p>Harvey and Mike take on an unorthodox case in light of Harvey's history with the client. Elsewhere, Louis and Rachel join forces to preserve a beloved institution, and Jessica encounters a problem while defending the firm.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12511"
                }
                }
            },
            {
                "id": 12512,
                "url": "https://www.tvmaze.com/episodes/12512/suits-2x07-sucker-punch",
                "name": "Sucker Punch",
                "season": 2,
                "number": 7,
                "airdate": "2012-08-02",
                "airtime": "22:00",
                "airstamp": "2012-08-02T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176115.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176115.jpg"
                },
                "summary": "<p>Harvey turns to an old colleague for help defending the firm against the lawsuit despite the pair's tumultuous past.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12512"
                }
                }
            },
            {
                "id": 12513,
                "url": "https://www.tvmaze.com/episodes/12513/suits-2x08-rewind",
                "name": "Rewind",
                "season": 2,
                "number": 8,
                "airdate": "2012-08-09",
                "airtime": "22:00",
                "airstamp": "2012-08-09T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176116.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176116.jpg"
                },
                "summary": "<p>Mike and Harvey look into the past to discover how their decisions have influenced the present.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12513"
                }
                }
            },
            {
                "id": 12514,
                "url": "https://www.tvmaze.com/episodes/12514/suits-2x09-asterisk",
                "name": "Asterisk",
                "season": 2,
                "number": 9,
                "airdate": "2012-08-16",
                "airtime": "22:00",
                "airstamp": "2012-08-16T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176117.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176117.jpg"
                },
                "summary": "<p>Harvey tries to sway an important figure whose vote will determine the firm's future.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12514"
                }
                }
            },
            {
                "id": 12515,
                "url": "https://www.tvmaze.com/episodes/12515/suits-2x10-high-noon",
                "name": "High Noon",
                "season": 2,
                "number": 10,
                "airdate": "2012-08-23",
                "airtime": "22:00",
                "airstamp": "2012-08-23T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176118.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176118.jpg"
                },
                "summary": "<p>Personal issues cause Mike to drop off the grid when Harvey needs him during the fight for the firm.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12515"
                }
                }
            },
            {
                "id": 12516,
                "url": "https://www.tvmaze.com/episodes/12516/suits-2x11-blind-sided",
                "name": "Blind-Sided",
                "season": 2,
                "number": 11,
                "airdate": "2013-01-17",
                "airtime": "22:00",
                "airstamp": "2013-01-17T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176119.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176119.jpg"
                },
                "summary": "<p>A criminal case resonates with Mike, making it difficult for him to separate his feelings from the case.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12516"
                }
                }
            },
            {
                "id": 12517,
                "url": "https://www.tvmaze.com/episodes/12517/suits-2x12-blood-in-the-water",
                "name": "Blood in the Water",
                "season": 2,
                "number": 12,
                "airdate": "2013-01-24",
                "airtime": "22:00",
                "airstamp": "2013-01-24T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176120.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176120.jpg"
                },
                "summary": "<p>The firm tries to recover from the battle with Daniel, but Harvey must fend off another attack from a rival who seems to have a personal vendetta. Elsewhere, Mike and Louis face consequences for previous actions.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12517"
                }
                }
            },
            {
                "id": 12518,
                "url": "https://www.tvmaze.com/episodes/12518/suits-2x13-zane-vs-zane",
                "name": "Zane Vs. Zane",
                "season": 2,
                "number": 13,
                "airdate": "2013-01-31",
                "airtime": "22:00",
                "airstamp": "2013-01-31T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176121.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176121.jpg"
                },
                "summary": "<p>Harvey faces off with Rachel's father on a gender-discrimination case, forcing Rachel to deal with her strained relationship with her dad.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12518"
                }
                }
            },
            {
                "id": 12519,
                "url": "https://www.tvmaze.com/episodes/12519/suits-2x14-hes-back",
                "name": "He's Back",
                "season": 2,
                "number": 14,
                "airdate": "2013-02-07",
                "airtime": "22:00",
                "airstamp": "2013-02-07T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176122.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176122.jpg"
                },
                "summary": "<p>Daniel returns with a lawsuit against Jessica.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12519"
                }
                }
            },
            {
                "id": 12520,
                "url": "https://www.tvmaze.com/episodes/12520/suits-2x15-normandy",
                "name": "Normandy",
                "season": 2,
                "number": 15,
                "airdate": "2013-02-14",
                "airtime": "22:00",
                "airstamp": "2013-02-14T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176123.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176123.jpg"
                },
                "summary": "<p>Dana resurfaces and causes problems for Harvey and Jessica in their battle against Hardman.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12520"
                }
                }
            },
            {
                "id": 12521,
                "url": "https://www.tvmaze.com/episodes/12521/suits-2x16-war",
                "name": "War",
                "season": 2,
                "number": 16,
                "airdate": "2013-02-21",
                "airtime": "22:00",
                "airstamp": "2013-02-21T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176124.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176124.jpg"
                },
                "summary": "<p>In the Series 2 finale, Harvey and Jessica clash over their vision for the direction of the firm when faced with a lucrative offer from a British firm.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12521"
                }
                }
            },
            {
                "id": 12522,
                "url": "https://www.tvmaze.com/episodes/12522/suits-3x01-the-arrangement",
                "name": "The Arrangement",
                "season": 3,
                "number": 1,
                "airdate": "2013-07-16",
                "airtime": "22:00",
                "airstamp": "2013-07-16T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175970.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175970.jpg"
                },
                "summary": "<p>In the Series 3 premiere, new partner Darby assigns Harvey a high-stakes case. Elsewhere, Mike tries to make things right with Harvey and deal with the fallout from his revelation to Rachel.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12522"
                }
                }
            },
            {
                "id": 12523,
                "url": "https://www.tvmaze.com/episodes/12523/suits-3x02-i-want-you-to-want-me",
                "name": "I Want You to Want Me",
                "season": 3,
                "number": 2,
                "airdate": "2013-07-23",
                "airtime": "22:00",
                "airstamp": "2013-07-23T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175971.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175971.jpg"
                },
                "summary": "<p>Louis has an offer for Mike that could affect his future at the firm; Harvey and Jessica take on an old foe, who throws a wrench into their defense of Ava Hessington.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12523"
                }
                }
            },
            {
                "id": 12524,
                "url": "https://www.tvmaze.com/episodes/12524/suits-3x03-unfinished-business",
                "name": "Unfinished Business",
                "season": 3,
                "number": 3,
                "airdate": "2013-07-30",
                "airtime": "22:00",
                "airstamp": "2013-07-30T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175972.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175972.jpg"
                },
                "summary": "<p>Harvey's client is arrested for murder; Katrina attempts to win over Louis, who's still stewing over Mike's rejection; and a British version of Harvey makes waves at the firm.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12524"
                }
                }
            },
            {
                "id": 12525,
                "url": "https://www.tvmaze.com/episodes/12525/suits-3x04-conflict-of-interest",
                "name": "Conflict Of Interest",
                "season": 3,
                "number": 4,
                "airdate": "2013-08-06",
                "airtime": "22:00",
                "airstamp": "2013-08-06T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175973.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175973.jpg"
                },
                "summary": "<p>Harvey and Louis are at odds when Harvey's defense of Ava conflicts with Louis' assignment to prevent a hostile takeover of Hessington Oil.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12525"
                }
                }
            },
            {
                "id": 12526,
                "url": "https://www.tvmaze.com/episodes/12526/suits-3x05-shadow-of-a-doubt",
                "name": "Shadow Of A Doubt",
                "season": 3,
                "number": 5,
                "airdate": "2013-08-13",
                "airtime": "22:00",
                "airstamp": "2013-08-13T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175974.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175974.jpg"
                },
                "summary": "<p>Harvey and Stephen join forces for Ava's defense; Mike asks Rachel for help with a case, but complications arise when her parents end up coming close to learning his secret.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12526"
                }
                }
            },
            {
                "id": 12527,
                "url": "https://www.tvmaze.com/episodes/12527/suits-3x06-the-other-time",
                "name": "The Other Time",
                "season": 3,
                "number": 6,
                "airdate": "2013-08-20",
                "airtime": "22:00",
                "airstamp": "2013-08-20T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175975.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175975.jpg"
                },
                "summary": "<p>Cameron's dirty tactics on Ava's case lead Harvey to recall why he left the D.A.'s office. Elsewhere, Mike looks back at what prevented him from earning a degree while Rachel visits law schools.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12527"
                }
                }
            },
            {
                "id": 12528,
                "url": "https://www.tvmaze.com/episodes/12528/suits-3x07-shes-mine",
                "name": "She's Mine",
                "season": 3,
                "number": 7,
                "airdate": "2013-08-27",
                "airtime": "22:00",
                "airstamp": "2013-08-27T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175976.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175976.jpg"
                },
                "summary": "<p>Harvey butts heads with Stephen over Ava's case and other issues; Harvey and Jessica must overcome the tension between them to work on Ava's defense; and Louis seeks help from Rachel in his battle with Nigel.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12528"
                }
                }
            },
            {
                "id": 12529,
                "url": "https://www.tvmaze.com/episodes/12529/suits-3x08-endgame",
                "name": "Endgame",
                "season": 3,
                "number": 8,
                "airdate": "2013-09-03",
                "airtime": "22:00",
                "airstamp": "2013-09-03T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175988.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175988.jpg"
                },
                "summary": "<p>Ava's murder trial begins as Mike, Harvey and Jessica navigate a series of betrayals. Elsewhere, Louis and Donna each seek revenge.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12529"
                }
                }
            },
            {
                "id": 12530,
                "url": "https://www.tvmaze.com/episodes/12530/suits-3x09-bad-faith",
                "name": "Bad Faith",
                "season": 3,
                "number": 9,
                "airdate": "2013-09-10",
                "airtime": "22:00",
                "airstamp": "2013-09-10T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175977.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175977.jpg"
                },
                "summary": "<p>Harvey and Scottie find themselves at odds once again, while Louis persuades Jessica to let him handle the dissolution talks. Elsewhere, Mike makes a big move in his relationship with Rachel.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12530"
                }
                }
            },
            {
                "id": 12531,
                "url": "https://www.tvmaze.com/episodes/12531/suits-3x10-stay",
                "name": "Stay",
                "season": 3,
                "number": 10,
                "airdate": "2013-09-17",
                "airtime": "22:00",
                "airstamp": "2013-09-17T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175978.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175978.jpg"
                },
                "summary": "<p>Harvey and Scottie find themselves on opposite sides when an old enemy complicates the Pearson Darby negotiations. Elsewhere, Sheila and Louis are at odds over a new hire, and Jessica is unhappy with Mike and Rachel.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12531"
                }
                }
            },
            {
                "id": 12532,
                "url": "https://www.tvmaze.com/episodes/12532/suits-3x11-buried-secrets",
                "name": "Buried Secrets",
                "season": 3,
                "number": 11,
                "airdate": "2014-03-06",
                "airtime": "21:00",
                "airstamp": "2014-03-06T21:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175979.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175979.jpg"
                },
                "summary": "<p>Complications arise between Harvey, Jessica and Scottie; Mike faces his demons during a case against an old enemy; Louis' suspicions may expose Mike.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12532"
                }
                }
            },
            {
                "id": 12533,
                "url": "https://www.tvmaze.com/episodes/12533/suits-3x12-yesterdays-gone",
                "name": "Yesterday's Gone",
                "season": 3,
                "number": 12,
                "airdate": "2014-03-13",
                "airtime": "21:00",
                "airstamp": "2014-03-13T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175980.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175980.jpg"
                },
                "summary": "<p>Jessica finds an unlikely friend in Harvey as her concerns continue to mount.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12533"
                }
                }
            },
            {
                "id": 12534,
                "url": "https://www.tvmaze.com/episodes/12534/suits-3x13-moot-point",
                "name": "Moot Point",
                "season": 3,
                "number": 13,
                "airdate": "2014-03-20",
                "airtime": "21:00",
                "airstamp": "2014-03-20T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175981.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175981.jpg"
                },
                "summary": "<p>Harvey faces an old rival from law school; Jessica tries to stay out of Louis and Scottie's feud.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12534"
                }
                }
            },
            {
                "id": 12535,
                "url": "https://www.tvmaze.com/episodes/12535/suits-3x14-heartburn",
                "name": "Heartburn",
                "season": 3,
                "number": 14,
                "airdate": "2014-03-27",
                "airtime": "21:00",
                "airstamp": "2014-03-27T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175982.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175982.jpg"
                },
                "summary": "<p>A major client demands that Harvey and Mike perform an unpleasant task; Louis faces a difficult challenge; Laura collects an old debt.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12535"
                }
                }
            },
            {
                "id": 12536,
                "url": "https://www.tvmaze.com/episodes/12536/suits-3x15-know-when-to-fold-em",
                "name": "Know When to Fold 'Em",
                "season": 3,
                "number": 15,
                "airdate": "2014-04-03",
                "airtime": "21:00",
                "airstamp": "2014-04-03T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175983.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175983.jpg"
                },
                "summary": "<p>A persistent attorney goes after one of Harvey's clients; Mike is faced with a difficult decision; former name partner Charles Van Dyke returns with revenge on his mind.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12536"
                }
                }
            },
            {
                "id": 12537,
                "url": "https://www.tvmaze.com/episodes/12537/suits-3x16-no-way-out",
                "name": "No Way Out",
                "season": 3,
                "number": 16,
                "airdate": "2014-04-10",
                "airtime": "21:00",
                "airstamp": "2014-04-10T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175984.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175984.jpg"
                },
                "summary": "<p>Harvey and Mike clash with a tenacious U.S. attorney in the Series 3 finale. Elsewhere, Scottie and Harvey struggle to reach a compromise, and Mike and Rachel have different ideas about the future.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12537"
                }
                }
            },
            {
                "id": 12538,
                "url": "https://www.tvmaze.com/episodes/12538/suits-4x01-one-two-three-go",
                "name": "One-Two-Three Go...",
                "season": 4,
                "number": 1,
                "airdate": "2014-06-11",
                "airtime": "21:00",
                "airstamp": "2014-06-11T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175898.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175898.jpg"
                },
                "summary": "<p>Mike and Harvey clash over investment-banking strategies in the Season 4 opener. Meanwhile, Pearson realizes a former district attorney may be pursuing revenge against Harvey and the firm.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12538"
                }
                }
            },
            {
                "id": 12539,
                "url": "https://www.tvmaze.com/episodes/12539/suits-4x02-breakfast-lunch-and-dinner",
                "name": "Breakfast, Lunch and Dinner",
                "season": 4,
                "number": 2,
                "airdate": "2014-06-18",
                "airtime": "21:00",
                "airstamp": "2014-06-18T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175897.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175897.jpg"
                },
                "summary": "<p>A takeover battle pits Harvey and Mike against one another, and the situation is only complicated further by Mike's relationship with Rachel. Elsewhere, Louis partners with recent SEC defector Jeff Malonein.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12539"
                }
                }
            },
            {
                "id": 12540,
                "url": "https://www.tvmaze.com/episodes/12540/suits-4x03-two-in-the-knees",
                "name": "Two in the Knees",
                "season": 4,
                "number": 3,
                "airdate": "2014-06-25",
                "airtime": "21:00",
                "airstamp": "2014-06-25T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175896.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175896.jpg"
                },
                "summary": "<p>Logan Sanders, a client of Pearson Specter, looks to Harvey to confirm that his relationship with Mike won't prevent them from winning the takeover battle. Elsewhere, misunderstandings arise between Louis and his new colleague Jeff Malone.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12540"
                }
                }
            },
            {
                "id": 12541,
                "url": "https://www.tvmaze.com/episodes/12541/suits-4x04-leveraged",
                "name": "Leveraged",
                "season": 4,
                "number": 4,
                "airdate": "2014-07-09",
                "airtime": "21:00",
                "airstamp": "2014-07-09T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175895.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175895.jpg"
                },
                "summary": "<p>Mike initiates a hostile takeover of Gillis Industries while Harvey and Louis work feverishly against his efforts. Elsewhere, Jessica and Malone meet with Sean Cahill, who has the weight of the SEC behind him in bringing down the firm.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12541"
                }
                }
            },
            {
                "id": 12542,
                "url": "https://www.tvmaze.com/episodes/12542/suits-4x05-pound-of-flesh",
                "name": "Pound of Flesh",
                "season": 4,
                "number": 5,
                "airdate": "2014-07-16",
                "airtime": "21:00",
                "airstamp": "2014-07-16T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175894.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175894.jpg"
                },
                "summary": "<p>Rachel becomes increasingly anxious about work, school, and the growing attraction between herself and Pearson Specter client Logan Sanders. Meanwhile, Louis helps Donna prepare for a major role while she encourages him to face his fear. Harvey and Mike agree to a ceasefire, but Sam accuses him of collusion and Mike learns how ruthless his new partner can be.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12542"
                }
                }
            },
            {
                "id": 12543,
                "url": "https://www.tvmaze.com/episodes/12543/suits-4x06-litt-the-hell-up",
                "name": "Litt the Hell Up",
                "season": 4,
                "number": 6,
                "airdate": "2014-07-23",
                "airtime": "21:00",
                "airstamp": "2014-07-23T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175893.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175893.jpg"
                },
                "summary": "<p>Harvey tries to end the takeover when Sean Cahill brings Pearson Specter client Logan Sanders to the SEC for questioning. Elsewhere, Louis finds a way to make a name for himself when Mike insists on playing hardball.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12543"
                }
                }
            },
            {
                "id": 12544,
                "url": "https://www.tvmaze.com/episodes/12544/suits-4x07-were-done",
                "name": "We're Done",
                "season": 4,
                "number": 7,
                "airdate": "2014-07-30",
                "airtime": "21:00",
                "airstamp": "2014-07-30T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175892.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175892.jpg"
                },
                "summary": "<p>Rachel brings disturbing news while Mike is still reeling from the aftermath of the battle for Gillis Industries. Feeling Harvey is his only friend left, Mike makes a rash decision; elsewhere, Jessica asks Louis to pick his own reward after his victory for the firm.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12544"
                }
                }
            },
            {
                "id": 12545,
                "url": "https://www.tvmaze.com/episodes/12545/suits-4x08-exposure",
                "name": "Exposure",
                "season": 4,
                "number": 8,
                "airdate": "2014-08-06",
                "airtime": "21:00",
                "airstamp": "2014-08-06T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175891.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175891.jpg"
                },
                "summary": "<p>Mike and Rachel work closely with one another while Jessica and Harvey try to outmaneuver Sean Cahill. Elsewhere, Louis tries to hide evidence for the sake of his career.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12545"
                }
                }
            },
            {
                "id": 12546,
                "url": "https://www.tvmaze.com/episodes/12546/suits-4x09-gone",
                "name": "Gone",
                "season": 4,
                "number": 9,
                "airdate": "2014-08-13",
                "airtime": "21:00",
                "airstamp": "2014-08-13T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175890.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175890.jpg"
                },
                "summary": "<p>Professional and personal secrets are unearthed when Sean begins a round of depositions as the SEC investigation comes to a head.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12546"
                }
                }
            },
            {
                "id": 12547,
                "url": "https://www.tvmaze.com/episodes/12547/suits-4x10-this-is-rome",
                "name": "This is Rome",
                "season": 4,
                "number": 10,
                "airdate": "2014-08-20",
                "airtime": "21:00",
                "airstamp": "2014-08-20T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175889.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175889.jpg"
                },
                "summary": "<p>Harvey and Jessica try to protect the firm from competitors; Louis tries to balance his personal and professional affairs.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/12547"
                }
                }
            },
            {
                "id": 57555,
                "url": "https://www.tvmaze.com/episodes/57555/suits-4x11-enough-is-enough",
                "name": "Enough Is Enough",
                "season": 4,
                "number": 11,
                "airdate": "2015-01-28",
                "airtime": "22:00",
                "airstamp": "2015-01-28T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/7/19992.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/7/19992.jpg"
                },
                "summary": "<p>Gabriel Macht directs the Season 4 mid-season premiere, which finds Louis gaining leverage in his quest to become a name partner of the firm; and the Pearson Specter team dealing with the fallout of Louis learning Mike's secret.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/57555"
                }
                }
            },
            {
                "id": 124035,
                "url": "https://www.tvmaze.com/episodes/124035/suits-4x12-respect",
                "name": "Respect",
                "season": 4,
                "number": 12,
                "airdate": "2015-02-04",
                "airtime": "22:00",
                "airstamp": "2015-02-04T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175888.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175888.jpg"
                },
                "summary": "<p>Harvard ethics professor Henry Gerard seeks Harvey's help with a case that requires a lack of ethics to win. Mike, meanwhile, does his best to not be spotted by the professor, whose class he never took; and Louis tries to wine and dine a socialite CEO.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/124035"
                }
                }
            },
            {
                "id": 124036,
                "url": "https://www.tvmaze.com/episodes/124036/suits-4x13-fork-in-the-road",
                "name": "Fork in the Road",
                "season": 4,
                "number": 13,
                "airdate": "2015-02-11",
                "airtime": "22:00",
                "airstamp": "2015-02-11T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/8/21577.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/8/21577.jpg"
                },
                "summary": "<p>Harvey and Louis travel to see a client to whom they have deep ties; and Harvey takes advantage of the time to force Louis and Mike to confront their trust issues. In other events, in a flashback, the root of Harvey and Louis's competitive relationship is explained; and Mike learns the limits of his intelligence when it comes to the law.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/124036"
                }
                }
            },
            {
                "id": 124037,
                "url": "https://www.tvmaze.com/episodes/124037/suits-4x14-derailed",
                "name": "Derailed",
                "season": 4,
                "number": 14,
                "airdate": "2015-02-18",
                "airtime": "22:00",
                "airstamp": "2015-02-18T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/175887.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/175887.jpg"
                },
                "summary": "<p>When Mike takes a humanitarian case with the potential to jeopardize firm business, Harvey must decide how much to rein in his associate. Meanwhile, Jessica wrestles with the distance she's been forced to put between herself and Jeff Malone. And Louis fights to get the respect a name partner deserves.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/124037"
                }
                }
            },
            {
                "id": 124038,
                "url": "https://www.tvmaze.com/episodes/124038/suits-4x15-intent",
                "name": "Intent",
                "season": 4,
                "number": 15,
                "airdate": "2015-02-25",
                "airtime": "22:00",
                "airstamp": "2015-02-25T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/8/22428.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/8/22428.jpg"
                },
                "summary": "<p>Harvey and Mike scramble to save the Liberty Rail case; D.A. Wolf comes after the firm; and Jessica and Malone try to adjust to their new circumstances.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/124038"
                }
                }
            },
            {
                "id": 141816,
                "url": "https://www.tvmaze.com/episodes/141816/suits-4x16-not-just-a-pretty-face",
                "name": "Not Just a Pretty Face",
                "season": 4,
                "number": 16,
                "airdate": "2015-03-04",
                "airtime": "22:00",
                "airstamp": "2015-03-04T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/9/22908.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/9/22908.jpg"
                },
                "summary": "<p>When SEC investigator Sean Cahill fails to link his corrupt boss Eric Woodall with corporate raider Charles Forstman, Harvey consults with Jessica but must ultimately revisit his own uncomfortable past in order to find a way to put them away for good. Mike and Rachel confront the fact that, while Rachel is Harvey's associate, Mike is his guy. And Donna helps Louis with an unexpected crisis.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/141816"
                }
                }
            },
            {
                "id": 153399,
                "url": "https://www.tvmaze.com/episodes/153399/suits-5x01-denial",
                "name": "Denial",
                "season": 5,
                "number": 1,
                "airdate": "2015-06-24",
                "airtime": "21:00",
                "airstamp": "2015-06-24T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/72/181055.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/72/181055.jpg"
                },
                "summary": "<p>In the Season 5 premiere, Harvey's work is impacted by changes around the office; and Donna adjusts to working for Louis, who believes she's certain to return to Harvey. In other events, Mike and Rachel must decide how and when to share their big news; and an up-and-coming partner confronts Jessica about Harvey's way of doing business.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/153399"
                }
                }
            },
            {
                "id": 177751,
                "url": "https://www.tvmaze.com/episodes/177751/suits-5x02-compensation",
                "name": "Compensation",
                "season": 5,
                "number": 2,
                "airdate": "2015-07-01",
                "airtime": "21:00",
                "airstamp": "2015-07-01T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/72/181059.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/72/181059.jpg"
                },
                "summary": "<p>Harvey searches for a replacement for Donna. Mike takes a case as a favor, which he must justify to Jessica - while Rachel's father, Robert Zane, offers some unsolicited advice about Rachel's engagement to Mike. And Louis is embroiled in surprising money matters, while an up-and-coming partner, Jack, makes his presence known to Jessica, confronting her about whether Harvey's way of doing business is beneficial to the firm.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/177751"
                }
                }
            },
            {
                "id": 177752,
                "url": "https://www.tvmaze.com/episodes/177752/suits-5x03-no-refills",
                "name": "No Refills",
                "season": 5,
                "number": 3,
                "airdate": "2015-07-08",
                "airtime": "21:00",
                "airstamp": "2015-07-08T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/72/181060.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/72/181060.jpg"
                },
                "summary": "<p>Harvey brings some star power to his ongoing conflict with Jack Soloff - a conflict that Louis and Donna can't seem to stay clear of. Mike brings in Robert Zane to co-counsel a case, pitting his instincts as a lawyer against his desire to stay in his future father-in-law's good graces. And while Jessica mediates between Mike and Zane, she tasks Rachel with an unusual assignment.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/177752"
                }
                }
            },
            {
                "id": 177753,
                "url": "https://www.tvmaze.com/episodes/177753/suits-5x04-no-puedo-hacerlo",
                "name": "No Puedo Hacerlo",
                "season": 5,
                "number": 4,
                "airdate": "2015-07-15",
                "airtime": "21:00",
                "airstamp": "2015-07-15T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/72/181061.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/72/181061.jpg"
                },
                "summary": "<p>Harvey steps outside his usual area of expertise, in order to take a case from a client who has a special tie to the firm. Mike and Zane work their class-action case together, but Mike learns they have different ideas about what constitutes a win - for themselves, and for their clients. And Donna counsels Louis on the best way to settle a feud.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/177753"
                }
                }
            },
            {
                "id": 177754,
                "url": "https://www.tvmaze.com/episodes/177754/suits-5x05-toe-to-toe",
                "name": "Toe to Toe",
                "season": 5,
                "number": 5,
                "airdate": "2015-07-22",
                "airtime": "21:00",
                "airstamp": "2015-07-22T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/73/183026.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/73/183026.jpg"
                },
                "summary": "<p>When Harvey's bitter rival Travis Tanner turns up on the other side of a case, claiming to be a changed man, Harvey and Mike must decide whether to believe him - or bury him. As Harvey's sessions with Dr. Agard continue, she links his personal stake in the Tanner fight to issues from his past. Meanwhile, Jessica tasks Louis to make things right with Harvey, and with Rachel and Donna's help he devises a plan - one which could make an enemy of the formidable Jack Soloff.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/177754"
                }
                }
            },
            {
                "id": 189615,
                "url": "https://www.tvmaze.com/episodes/189615/suits-5x06-privilege",
                "name": "Privilege",
                "season": 5,
                "number": 6,
                "airdate": "2015-07-29",
                "airtime": "21:00",
                "airstamp": "2015-07-29T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/73/183024.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/73/183024.jpg"
                },
                "summary": "<p>Reeling from Dr. Agard's revelation about the root of his panic attacks, Harvey is forced to make a tough personal decision in a case that touches a nerve. Meanwhile, Mike and Louis have taken over responsibility for Harvey's oldest client, and must decide what to do when that client's demands go against his own best interests. And Donna tries to work her magic to make Rachel's dream wedding possible.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/189615"
                }
                }
            },
            {
                "id": 201011,
                "url": "https://www.tvmaze.com/episodes/201011/suits-5x07-hitting-home",
                "name": "Hitting Home",
                "season": 5,
                "number": 7,
                "airdate": "2015-08-05",
                "airtime": "21:00",
                "airstamp": "2015-08-05T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/73/184882.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/73/184882.jpg"
                },
                "summary": "<p>Mike teams with Jack Soloff on a case; Esther Litt returns to P.S.L. in hopes of discreetly solving a problem; and Donna and Harvey try to return their friendship to normal.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/201011"
                }
                }
            },
            {
                "id": 202073,
                "url": "https://www.tvmaze.com/episodes/202073/suits-5x08-mea-culpa",
                "name": "Mea Culpa",
                "season": 5,
                "number": 8,
                "airdate": "2015-08-12",
                "airtime": "22:00",
                "airstamp": "2015-08-12T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/73/184883.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/73/184883.jpg"
                },
                "summary": "<p>Jessica does damage control in the wake of Harvey punching Louis, just as Jack Soloff and Daniel Hardman are looking for weaknesses to exploit. Meanwhile, Donna counsels both men on how to rectify their issues. And Mike must find a way to turn down his recently announced promotion without raising suspicion - while he and Rachel combat an opposing attorney who holds the key to uncovering his secret.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/202073"
                }
                }
            },
            {
                "id": 202850,
                "url": "https://www.tvmaze.com/episodes/202850/suits-5x09-uninvited-guests",
                "name": "Uninvited Guests",
                "season": 5,
                "number": 9,
                "airdate": "2015-08-19",
                "airtime": "22:00",
                "airstamp": "2015-08-19T22:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/15/38920.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/15/38920.jpg"
                },
                "summary": "<p>Rachel and her mother, Laura Zane, plan for Rachel's dream wedding, but Rachel fears the event may reveal Mike's secret. Meanwhile Daniel Hardman and Jack Soloff make their move against Jessica and the partners, as Harvey and Mike tangle with Hardman's mysterious backer, and Louis tries to find Jack's Achilles heel.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/202850"
                }
                }
            },
            {
                "id": 203890,
                "url": "https://www.tvmaze.com/episodes/203890/suits-5x10-faith",
                "name": "Faith",
                "season": 5,
                "number": 10,
                "airdate": "2015-08-26",
                "airtime": "21:00",
                "airstamp": "2015-08-26T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/16/40193.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/16/40193.jpg"
                },
                "summary": "<p>Jessica and Louis try to rally the partners to stop the takeover attempt by Hardman and Soloff. In other events, Mike and Harvey each face down past demons in order to make potentially life-altering decisions.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/203890"
                }
                }
            },
            {
                "id": 426794,
                "url": "https://www.tvmaze.com/episodes/426794/suits-5x11-blowback",
                "name": "Blowback",
                "season": 5,
                "number": 11,
                "airdate": "2016-01-27",
                "airtime": "22:00",
                "airstamp": "2016-01-27T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/39/98177.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/39/98177.jpg"
                },
                "summary": "<p>As we begin our mid-season premiere, Mike's worst fears have come true. He's been arrested for fraud and is under investigation by a ruthless government prosecutor, Assistant US Attorney Anita Gibbs. Meanwhile, Jessica and Harvey must figure out how to build a defense for Mike, knowing full well that he's guilty of the crime for which he stands accused. And Rachel must come to terms with her family's reaction to the news that her fiancé is not the person he claimed to be - and that he could soon be in prison.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/426794"
                }
                }
            },
            {
                "id": 570459,
                "url": "https://www.tvmaze.com/episodes/570459/suits-5x12-live-to-fight",
                "name": "Live to Fight",
                "season": 5,
                "number": 12,
                "airdate": "2016-02-03",
                "airtime": "22:00",
                "airstamp": "2016-02-03T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/42/106355.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/42/106355.jpg"
                },
                "summary": "<p>Mike and Louis must identify an anonymous tipster in order to diffuse a\n damning piece of evidence. Meanwhile, Gibbs isn't just after Mike, \nshe's set her sights on Jessica and Harvey as well</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/570459"
                }
                }
            },
            {
                "id": 570460,
                "url": "https://www.tvmaze.com/episodes/570460/suits-5x13-gods-green-earth",
                "name": "God's Green Earth",
                "season": 5,
                "number": 13,
                "airdate": "2016-02-10",
                "airtime": "22:00",
                "airstamp": "2016-02-10T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/42/106354.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/42/106354.jpg"
                },
                "summary": "<p>With time running out before Mike's case goes to trial, Harvey and Mike \nare at odds over their strategy, and just what lengths they'll go to in \norder to defeat Gibbs.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/570460"
                }
                }
            },
            {
                "id": 570461,
                "url": "https://www.tvmaze.com/episodes/570461/suits-5x14-self-defense",
                "name": "Self Defense",
                "season": 5,
                "number": 14,
                "airdate": "2016-02-17",
                "airtime": "22:00",
                "airstamp": "2016-02-17T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/44/110632.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/44/110632.jpg"
                },
                "summary": "<p>As time runs out before the trial, Mike wants to represent himself while\n Harvey wants to lead the charge. To decide the issue, Harvey challenges\n Mike to a winner takes all showdown.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/570461"
                }
                }
            },
            {
                "id": 570462,
                "url": "https://www.tvmaze.com/episodes/570462/suits-5x15-tick-tock",
                "name": "Tick Tock",
                "season": 5,
                "number": 15,
                "airdate": "2016-02-24",
                "airtime": "22:00",
                "airstamp": "2016-02-24T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/44/110633.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/44/110633.jpg"
                },
                "summary": "<p>With things looking bad for the firm, Louis mulls over Anita Gibbs' offer to turn on his compatriots in exchange for immunity. Meanwhile, Rachel gives Mike advice on how best to win hearts and minds in the courtroom. As the pressure mounts, Donna pleads with Harvey to not do anything rash, even as Jessica encourages him to do so. And Harvey and Mike look to a new, last-ditch strategy to win the case.. but as they run out of moves to play and deals to make, they face the possibility of putting Mike's fate in the last place they want it - the hands of a jury.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/570462"
                }
                }
            },
            {
                "id": 570463,
                "url": "https://www.tvmaze.com/episodes/570463/suits-5x16-25th-hour",
                "name": "25th Hour",
                "season": 5,
                "number": 16,
                "airdate": "2016-03-02",
                "airtime": "22:00",
                "airstamp": "2016-03-02T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/47/118659.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/47/118659.jpg"
                },
                "summary": "<p>Mike makes the one play he has left when faced with a court battle that could go either way.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/570463"
                }
                }
            },
            {
                "id": 774411,
                "url": "https://www.tvmaze.com/episodes/774411/suits-6x01-to-trouble",
                "name": "To Trouble",
                "season": 6,
                "number": 1,
                "airdate": "2016-07-13",
                "airtime": "21:00",
                "airstamp": "2016-07-13T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/67/168702.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/67/168702.jpg"
                },
                "summary": "Seasonn 6 begins immediately following the events of the shocking Season 5 cliffhanger that left Mike behind bars.",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/774411"
                }
                }
            },
            {
                "id": 830861,
                "url": "https://www.tvmaze.com/episodes/830861/suits-6x02-accounts-payable",
                "name": "Accounts Payable",
                "season": 6,
                "number": 2,
                "airdate": "2016-07-20",
                "airtime": "21:00",
                "airstamp": "2016-07-20T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/68/170689.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/68/170689.jpg"
                },
                "summary": "<p>PSL faces a class action lawsuit from former clients; and Mike has problems with a fellow prisoner.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/830861"
                }
                }
            },
            {
                "id": 830862,
                "url": "https://www.tvmaze.com/episodes/830862/suits-6x03-back-on-the-map",
                "name": "Back on the Map",
                "season": 6,
                "number": 3,
                "airdate": "2016-07-27",
                "airtime": "21:00",
                "airstamp": "2016-07-27T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/69/172682.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/69/172682.jpg"
                },
                "summary": "<p>Mike tries to remain safe without breaking Danbury's unwritten rules; \nJessica and Harvey try to land a whale; Louis searches for an office \ntenant; and Rachel faces a fellow student</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/830862"
                }
                }
            },
            {
                "id": 830863,
                "url": "https://www.tvmaze.com/episodes/830863/suits-6x04-turn",
                "name": "Turn",
                "season": 6,
                "number": 4,
                "airdate": "2016-08-03",
                "airtime": "21:00",
                "airstamp": "2016-08-03T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/69/174615.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/69/174615.jpg"
                },
                "summary": "<p>Mike may take a deal to reduce his sentence; Jessica and Louis have \ndifferent ways of dealing with their new tenants; and Rachel represents a\n death-row inmate.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/830863"
                }
                }
            },
            {
                "id": 830864,
                "url": "https://www.tvmaze.com/episodes/830864/suits-6x05-trust",
                "name": "Trust",
                "season": 6,
                "number": 5,
                "airdate": "2016-08-10",
                "airtime": "21:00",
                "airstamp": "2016-08-10T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/70/176607.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/70/176607.jpg"
                },
                "summary": "<p>Mike tries to gain Kevin's trust while Harvey enacts a risky plan; \nJessica mends the firm's reputation; Rachel runs into a roadblock; and \nLouis enlists Donna's help in a matter of the heart.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/830864"
                }
                }
            },
            {
                "id": 830865,
                "url": "https://www.tvmaze.com/episodes/830865/suits-6x06-spain",
                "name": "Spain",
                "season": 6,
                "number": 6,
                "airdate": "2016-08-17",
                "airtime": "21:00",
                "airstamp": "2016-08-17T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/71/179036.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/71/179036.jpg"
                },
                "summary": "<p>Harvey defends Sutter from Cahill; Mike's past threatens to derail his \nmission; Rachel and Jessica search for evidence to re-open Bailey's \ncase; and Louis woos Tara with a trip to the Hamptons.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/830865"
                }
                }
            },
            {
                "id": 830866,
                "url": "https://www.tvmaze.com/episodes/830866/suits-6x07-shake-the-trees",
                "name": "Shake the Trees",
                "season": 6,
                "number": 7,
                "airdate": "2016-08-24",
                "airtime": "21:00",
                "airstamp": "2016-08-24T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/72/181034.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/72/181034.jpg"
                },
                "summary": "<p>Harvey, Louis and Donna search for a link to Sutter's inside trading; \nMike goes to extremes to get Kevin on his side; and Rachel and Jessica \ndeliver bad news to Leonard Bailey.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/830866"
                }
                }
            },
            {
                "id": 830867,
                "url": "https://www.tvmaze.com/episodes/830867/suits-6x08-borrowed-time",
                "name": "Borrowed Time",
                "season": 6,
                "number": 8,
                "airdate": "2016-08-31",
                "airtime": "21:00",
                "airstamp": "2016-08-31T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/73/182761.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/73/182761.jpg"
                },
                "summary": "<p>Harvey rebuts Cahill's star witness; and Mike tries to deliver one of \nhis own. In other events, Jessica and Rachel try to delay Leonard's \nexecution; and Louis adjusts to life as \"the other man.\"</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/830867"
                }
                }
            },
            {
                "id": 830868,
                "url": "https://www.tvmaze.com/episodes/830868/suits-6x09-the-hand-that-feeds-you",
                "name": "The Hand That Feeds You",
                "season": 6,
                "number": 9,
                "airdate": "2016-09-07",
                "airtime": "21:00",
                "airstamp": "2016-09-07T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/73/184667.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/73/184667.jpg"
                },
                "summary": "<p>In order to protect Mike, Harvey considers putting Gallo back on the streets; Jessica and Rachel get Bailey's case re-opened; Louis deals with anxiety over Tara.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/830868"
                }
                }
            },
            {
                "id": 830869,
                "url": "https://www.tvmaze.com/episodes/830869/suits-6x10-psl",
                "name": "P.S.L.",
                "season": 6,
                "number": 10,
                "airdate": "2016-09-14",
                "airtime": "21:00",
                "airstamp": "2016-09-14T21:00:00-04:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/74/187328.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/74/187328.jpg"
                },
                "summary": "<p>Jessica and Rachel fight to save Leonard Bailey; Harvey and Louis try to keep clients from abandoning ship by wooing their oldest client.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/830869"
                }
                }
            },
            {
                "id": 979416,
                "url": "https://www.tvmaze.com/episodes/979416/suits-6x11-shes-gone",
                "name": "She's Gone",
                "season": 6,
                "number": 11,
                "airdate": "2017-01-25",
                "airtime": "22:00",
                "airstamp": "2017-01-25T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/94/237367.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/94/237367.jpg"
                },
                "summary": "<p>Harvey, Louis and Donna plan for the future, after Jessica's departure from Pearson Specter Litt. Mike discovers the perils of life as an ex-convict. And Rachel considers her options for life after law school.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/979416"
                }
                }
            },
            {
                "id": 1041932,
                "url": "https://www.tvmaze.com/episodes/1041932/suits-6x12-the-painting",
                "name": "The Painting",
                "season": 6,
                "number": 12,
                "airdate": "2017-02-01",
                "airtime": "22:00",
                "airstamp": "2017-02-01T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/96/240454.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/96/240454.jpg"
                },
                "summary": "<p>Harvey tries to repair a broken relationship - leaving Louis, Donna and Rachel to manage PSL in his absence. Meanwhile, Mike gets a helping hand from an unexpected place.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/1041932"
                }
                }
            },
            {
                "id": 1046530,
                "url": "https://www.tvmaze.com/episodes/1046530/suits-6x13-teeth-nose-teeth",
                "name": "Teeth, Nose, Teeth",
                "season": 6,
                "number": 13,
                "airdate": "2017-02-08",
                "airtime": "22:00",
                "airstamp": "2017-02-08T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/97/243607.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/97/243607.jpg"
                },
                "summary": "<p>Rachel receives a letter that creates an unexpected issue for Harvey and Louis. Mike's mentorship of Oliver and Marissa gets put to the test. And Donna gets a surprise from the IT department.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/1046530"
                }
                }
            },
            {
                "id": 1047339,
                "url": "https://www.tvmaze.com/episodes/1047339/suits-6x14-admission-of-guilt",
                "name": "Admission of Guilt",
                "season": 6,
                "number": 14,
                "airdate": "2017-02-15",
                "airtime": "22:00",
                "airstamp": "2017-02-15T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/98/246720.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/98/246720.jpg"
                },
                "summary": "<p>Harvey and Mike walk a fine line when they partner on a class action; Louis needs Rachel's help impressing a client during an annual presentation; and Donna and Benjamin refine their product.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/1047339"
                }
                }
            },
            {
                "id": 1047340,
                "url": "https://www.tvmaze.com/episodes/1047340/suits-6x15-quid-pro-quo",
                "name": "Quid Pro Quo",
                "season": 6,
                "number": 15,
                "airdate": "2017-02-22",
                "airtime": "22:00",
                "airstamp": "2017-02-22T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/98/245344.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/98/245344.jpg"
                },
                "summary": "<p>When Mike's class action hits a snag, it might cost him more than the case; Harvey, Louis and Rachel consider getting their hands dirty; and Donna and Benjamin seek an investor.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/1047340"
                }
                }
            },
            {
                "id": 1047341,
                "url": "https://www.tvmaze.com/episodes/1047341/suits-6x16-character-and-fitness",
                "name": "Character and Fitness",
                "season": 6,
                "number": 16,
                "airdate": "2017-03-01",
                "airtime": "22:00",
                "airstamp": "2017-03-01T22:00:00-05:00",
                "runtime": 60,
                "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/100/251311.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/100/251311.jpg"
                },
                "summary": "<p>Mike needs Harvey and Rachel's help to overcome an impossible obstacle, or his dream of becoming a real lawyer is over. Donna's new venture hits a snag. Louis tries to patch things up with Tara.</p>",
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/1047341"
                }
                }
            },
            {
                "id": 1132689,
                "url": "https://www.tvmaze.com/episodes/1132689/suits-7x01-episode-1",
                "name": "Episode 1",
                "season": 7,
                "number": 1,
                "airdate": "2017-07-12",
                "airtime": "21:00",
                "airstamp": "2017-07-12T21:00:00-04:00",
                "runtime": 60,
                "image": null,
                "summary": null,
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/1132689"
                }
                }
            },
            {
                "id": 1133681,
                "url": "https://www.tvmaze.com/episodes/1133681/suits-7x02-episode-2",
                "name": "Episode 2",
                "season": 7,
                "number": 2,
                "airdate": "2017-07-19",
                "airtime": "21:00",
                "airstamp": "2017-07-19T21:00:00-04:00",
                "runtime": 60,
                "image": null,
                "summary": null,
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/1133681"
                }
                }
            },
            {
                "id": 1133682,
                "url": "https://www.tvmaze.com/episodes/1133682/suits-7x03-episode-3",
                "name": "Episode 3",
                "season": 7,
                "number": 3,
                "airdate": "2017-07-26",
                "airtime": "21:00",
                "airstamp": "2017-07-26T21:00:00-04:00",
                "runtime": 60,
                "image": null,
                "summary": null,
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/1133682"
                }
                }
            },
            {
                "id": 1133683,
                "url": "https://www.tvmaze.com/episodes/1133683/suits-7x04-episode-4",
                "name": "Episode 4",
                "season": 7,
                "number": 4,
                "airdate": "2017-08-02",
                "airtime": "21:00",
                "airstamp": "2017-08-02T21:00:00-04:00",
                "runtime": 60,
                "image": null,
                "summary": null,
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/1133683"
                }
                }
            },
            {
                "id": 1133684,
                "url": "https://www.tvmaze.com/episodes/1133684/suits-7x05-episode-5",
                "name": "Episode 5",
                "season": 7,
                "number": 5,
                "airdate": "2017-08-09",
                "airtime": "21:00",
                "airstamp": "2017-08-09T21:00:00-04:00",
                "runtime": 60,
                "image": null,
                "summary": null,
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/1133684"
                }
                }
            },
            {
                "id": 1133685,
                "url": "https://www.tvmaze.com/episodes/1133685/suits-7x06-episode-6",
                "name": "Episode 6",
                "season": 7,
                "number": 6,
                "airdate": "2017-08-16",
                "airtime": "21:00",
                "airstamp": "2017-08-16T21:00:00-04:00",
                "runtime": 60,
                "image": null,
                "summary": null,
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/1133685"
                }
                }
            },
            {
                "id": 1133686,
                "url": "https://www.tvmaze.com/episodes/1133686/suits-7x07-episode-7",
                "name": "Episode 7",
                "season": 7,
                "number": 7,
                "airdate": "2017-08-23",
                "airtime": "21:00",
                "airstamp": "2017-08-23T21:00:00-04:00",
                "runtime": 60,
                "image": null,
                "summary": null,
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/1133686"
                }
                }
            },
            {
                "id": 1133687,
                "url": "https://www.tvmaze.com/episodes/1133687/suits-7x08-episode-8",
                "name": "Episode 8",
                "season": 7,
                "number": 8,
                "airdate": "2017-08-30",
                "airtime": "21:00",
                "airstamp": "2017-08-30T21:00:00-04:00",
                "runtime": 60,
                "image": null,
                "summary": null,
                "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/1133687"
                }
                }
            }
            ]
      }
   },
   {
      "key":2,
      "name":"Modern Family",
      "image":"https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg"
   },
   {
      "key":3,
      "name":"The Flash",
      "image":"https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg"
   },
   {
      "key":4,
      "name":"Supergirl",
      "image":"https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg"
   }
]

class Search extends Component {
  constructor(props){
    super(props)
    this.state ={
      text: '',
      data: ''
    }
  }

  filter(text){
      const newData = show_first.filter(function(item){
      const itemData = item.name.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    this.setState({
      data: newData,
      text: text,
    })
  }
  deleteData(){
    this.setState({text:'', data:''})
  }

  _renderItem(item){
    const {navigate} = this.props.navigation
    return(
      <TouchableWithoutFeedback onPress={
          () => navigate('Details', {item: item})}
      >
          <Image style={{width: 120, height: 180}} source={{uri: item.image}}/>
      </TouchableWithoutFeedback>
    )
  }
  render(){
      const {goBack} = this.props.navigation
      return(
          <View style={styles.container}>
              <View style={styles.header}>
                <Icon
                    name="search"
                    color="grey"
                    size={18}
                    style={styles.searchIcon}
                />
                <TextInput
                    value={this.state.text}
                    onChangeText={(text) => this.filter(text)}
                    style={styles.input}
                    placeholder="Search"
                    placeholderTextColor="grey"
                    keyboardAppearance="dark"
                    autoFocus={true}
                  />
                  {this.state.text ?

                <TouchableWithoutFeedback onPress={() => this.deleteData() }>
                  <Icon
                      name="times-circle"
                      color="grey"
                      size={18}
                      style={styles.iconInputClose}
                  />
                </TouchableWithoutFeedback>
                : null}
                <TouchableWithoutFeedback style={styles.cancelButton} onPress={() => goBack() }>
                  <View style={styles.containerButton}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>

              <ScrollView>
                    <FlatList
                        style={{marginHorizontal:5}}
                        data={this.state.data}
                        numColumns={3}
                        columnWrapperStyle={{marginTop:5, marginLeft:5}}
                        renderItem={({item}) => this._renderItem(item)}
                    />
              </ScrollView>

          </View>
      )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#181818'
  },
  header:{
    height: 40,
    backgroundColor: '#181818',
    borderBottomWidth: 1,
    borderColor: '#3a3a3a',
    paddingBottom: 5,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  searchIcon:{
    position: 'absolute',
    top: 7,
    left:15,
    zIndex: 1,
    backgroundColor: 'transparent'
  },
  iconInputClose:{
    position: 'absolute',
    top: 7,
    right: 90,
    backgroundColor: 'transparent'
  },
  input:{
    width: width - (width / 4),
    height: 30,
    backgroundColor: '#323232',
    marginHorizontal: 10,
    paddingLeft: 30,
    borderRadius: 3,
  },
  cancelButtonText:{
    color: 'white',
  },
  image:{
    marginRight: 15,
    width: 115,
    height: 170
  }
})
export default Search;
